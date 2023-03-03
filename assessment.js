'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
assessmentButton.onclick = function() {
    console.log('ボタンが押されました');
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }
    console.log(userName);

  resultDivided.innerText = '';
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  tweetDivided.innerText = '';
  const anchor = document.createElement('a');
  const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('あなたのいいところ') +
    '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたのいいところ';

    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
};
const answers = [
'{userName}のいいところは顔面です。容姿の良さに気づかないようふるまって存分に嫌われましょう。',
'俺は気分がよかった。だから俺は青春を捨てた。by {userName}',
'{userName}のいいところがもしなかったらあなたはどうするか、もしいいところが人とはちがったらどうするか、世の中には考えても考えつかないことがたくさんある。そんな中僕は思った。あれ？？タコライスってメキシコ料理じゃなくね？？？？、、、、だそうです。。',
'バタコさん',
'{userName}のいいところは優しいことです。こんなクソ診断に付き合ってくれてありがとうございます。',
'{userName}はいいところです。{userName}自身がいいところです。絶対的な象徴です。お前は神だ。',
'{userName}のいいところはなんですか？？私が聞いているのです。',
'{userName}のいいところはツイートしてくれるところです（圧）',
'{userName}のいいところは、、、言っていいの？？マジで言うよ？？良いの？？良いのね？？じゃあ言うよ、、、３秒数えるね？？いくよ！？３、２、１、０！！みたいな感じの凄味がある（？）。',
'{userName}です。今日から俺が{userName}だ。お前は黙って失せろ。',
'{userName}。やあ。診断結果へようこそ。名前を打ってくれたってことは僕の出番だね。でもね、僕は悲しいんだ。みんなが僕を話が長いうえに仕事を全うしないクズっていうんだ。三日三晩泣いても誰も励ましてくれないんだ。でも君は違う！！ここまで読んでくれて本当にうれしいよ！！僕の愚痴を聞いてくれてありがとう！！また会えたらいいな。いや会えるよ！！君が僕を思ってくれる限り！！それじゃまた！！！！',
'{userName}のいいところは総理大臣になれる可能性があることです。同志がいてうれしいっぴ。',
'{userName}のいいところは食後のトイレットペーパーを残してくれることです。。。んで、お前誰。',
'{userName}。んふ//。{userName}。あは//。{userName}。{userName}。{userName}。{userName}。{userName}。{userName}{userName}{userName}{userName}{userName}{userName}{userName}{userName}{userName}{userName}。飽きたバイバイ。',
'{userName}のいいところは悪いところでもある。それはつまり、いいところは必ずいい結果をもたらすわけではないということ。勉強になったな。君もなかなかいい思考力してるぜ？？',
'{userName}のいいところはあります！！よかったね。',
];
function assessment(userName) {
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
      sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replaceAll('{userName}', userName);
    return result;
  }
  userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
      assessmentButton.onclick();
    }
  };

  console.assert(
    assessment('太郎') ===
      '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );

//'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
//'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
//'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
//'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
//'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
//'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
//'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
//'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
//'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
//'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
//'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
//'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
//'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
//'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
//'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
//'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',