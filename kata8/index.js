/*
1つ以上の単語からなる文字列を受け取り、同じ文字列を返しますが、5つ以上の単語をすべて逆にして返す関数を書いてください（この型の名前のように）。渡された文字列は、文字とスペースのみで構成されます。スペースは、複数の単語が存在する場合にのみ含まれます。
例: spinWords( "Hey fellow warriors" )=> "Hey wollef sroirraw" を返します spinWords( "This is a test")=> "This is a test" を返します spinWords( "This is another test" )=> "This is rehtona test" を返します。
*/

const spinWord = (phrase) => {
  let phraseArray = phrase.split(' ');
  console.log(phrase);

  phraseArray = phrase.split(' ');
  console.log(phraseArray);

  const reverseString = (string) => {
    return string.split("").reverse().join("");
  };

  for (let i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i].length >= 5) {
      const word = phraseArray[i];
      phraseArray[i] = reverseString(word);
    }
  }

  return phraseArray.join(' ');
};
