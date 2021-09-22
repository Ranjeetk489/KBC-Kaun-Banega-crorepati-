var readlineSync = require('readline-sync');
//welcome screen

var pName = readlineSync.question('What is your Name?');

var correctAns = ['Uttrakhand', 'Maharana Pratap', 'Chennai Express','Maricha']//Array which has correct answers stored in itself

console.log(`Welcome ${pName} ji, Hum apka swagat krte hai is adbhut game mein! Deviyon aur sajjano, chaliye hum aur aap milkar khelte hain kaun banega crorepati `);

var questions =['In 2013, where did the natural calamity known as Himalayan tsunami occur?','Who is the Bharat Ka Veer Putra Aaccording to the title of a 2013 TV Series','Manwa lage song is from which movie?', 'In the Ramayana, Which demon impersonated Rams voice, screaming Lakshman! Help me?']

var answers= [['Uttrakhand', 'Arunachal Pradesh' , 'Jammu and Kashmir', 'Sikkim'],['Tipu Sultan', 'Chandragupta Maurya', 'Maharana Pratap', 'Ashoka'],['Mere dad ki maruti', 'Chennai Express', 'Ghanchakkar', 'Race2'], ['surpanakha', 'khara', 'Maricha', 'Dushana']]

var score= 0;
for(var i =0; i<4; i++){
  var index = readlineSync.keyInSelect(answers[i],questions[i])
  if(correctAns.includes(answers[i][index])){
    if(i === 0){
      score += 10000;
    }
  console.log("Bahut sahi! Taaliyan Bajti Rehni chahiye");
  score = score * 2;
  if(i === 3){
    console.log(`Bahut hi unda khele hai aap ${pName}, ye lijiye apka ${score}Rs ka cheque, Jabaradast taaliya deviyon aur sajno ${pName} ji ke liye`);
  }
}
else{
  console.log(`Galat Jawab ${pName}! Apki kul jiti hui raashi hai ${score} Jabaradast taaliya deviyon aur sajno ${pName} ji ke liye`);
}
}

