// HPのお問い合わせ（Googleフォーム「AI活用 無料相談のお申し込み｜Comp Systems株式会社」）に
// 送信があったら、入力されたメールアドレスへ受付確認メールを自動で送る。
//
// 置き場所：Googleフォームの編集画面 →「︙」→「スクリプト エディタ」に、このファイルの中身を貼る。
// ここ（HPリポジトリ）は原本の保管用。フォーム側を直したらこちらにも反映すること。
//
// 初回だけ：エディタで setupTrigger を1回実行 → 権限を許可（フォーム所有の会社アカウントで）。
// 送信元を info@ にするには、そのアカウントの Gmail で info@compsystems.net を
// 「他のメールアドレスを追加（Send mail as）」に登録しておく必要がある。
// 未登録なら所有アカウントのアドレスから送り、返信先だけ info@ にする（ログに残す）。
//
// フォームの質問名を変えたら、下の Q も合わせて直すこと（質問名で回答を取り出しているため）。

const FROM = "info@compsystems.net";
const SENDER_NAME = "Comp Systems株式会社";
const SUBJECT = "【Comp Systems】お問い合わせを受け付けました";

const Q = {
  name: "お名前",
  company: "会社名",
  title: "役職",
  email: "メールアドレス",
  tel: "電話番号",
  status: "AIのご活用状況",
  method: "ご希望の連絡方法",
  concern: "気になっていること・お困りごと",
};

const SIGNATURE = [
  "━━━━━━━━━━━━━━━━━━━━",
  "Comp Systems株式会社",
  "〒530-0001",
  "大阪府大阪市北区梅田1丁目1番3号 大阪駅前第3ビル11階2号室",
  "Mail：info@compsystems.net",
  "Web：https://www.compsystems.net",
  "Phone：080-6391-8299",
  "━━━━━━━━━━━━━━━━━━━━",
].join("\n");

function setupTrigger() {
  const form = FormApp.getActiveForm();
  // 二重登録で同じメールが2通届くのを防ぐ
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === "onFormSubmit")
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("onFormSubmit").forForm(form).onFormSubmit().create();
}

function onFormSubmit(e) {
  const answers = {};
  e.response.getItemResponses().forEach((r) => {
    answers[r.getItem().getTitle()] = String(r.getResponse()).trim();
  });

  const to = answers[Q.email];
  if (!to) return;

  GmailApp.sendEmail(to, SUBJECT, buildBody(answers), sendOptions());
}

function buildBody(a) {
  // HPは「山田 太郎（ヤマダ タロウ）」で送ってくるので、宛名はフリガナを外す
  const name = (a[Q.name] || "").replace(/（.*）$/, "").trim();

  // 任意項目は空なら行ごと出さない
  const rows = [
    [Q.name, a[Q.name]],
    [Q.company, a[Q.company]],
    [Q.title, a[Q.title]],
    [Q.email, a[Q.email]],
    [Q.tel, a[Q.tel]],
    [Q.status, a[Q.status]],
    [Q.method, a[Q.method]],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `■ ${k}：${v}`);
  if (a[Q.concern]) rows.push(`■ ${Q.concern}：\n${a[Q.concern]}`);

  return [
    a[Q.company],
    `${name} 様`,
    "",
    "この度は、Comp Systems株式会社へお問い合わせいただき、",
    "誠にありがとうございます。",
    "",
    "以下の内容でお問い合わせを受け付けいたしました。",
    "内容を確認のうえ、2営業日以内に担当よりご連絡いたします。",
    "",
    "────────────────────",
    ...rows,
    "────────────────────",
    "",
    "※本メールは自動送信でお送りしています。",
    "　ご不明点やお急ぎの場合は、本メールへのご返信またはお電話でお問い合わせください。",
    "※お心当たりのない方は、お手数ですが本メールを破棄してください。",
    "※2営業日を過ぎても連絡がない場合は、迷惑メールフォルダに入っていないか",
    "　ご確認のうえ、下記までお知らせください。",
    "",
    SIGNATURE,
  ].join("\n");
}

function sendOptions() {
  const opts = { name: SENDER_NAME, replyTo: FROM };
  if (GmailApp.getAliases().includes(FROM)) {
    opts.from = FROM;
  } else {
    console.warn(`${FROM} が送信元エイリアスに未登録のため、フォーム所有アカウントのアドレスから送信（返信先は ${FROM}）`);
  }
  return opts;
}
