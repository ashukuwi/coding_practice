var magic8ball = ["Ask again later",
"That wouldn't be a good idea to me",
"Yes, you or he/she should definitely do that",
"Maybe not today",
"I don't know",
"Well, it's the best thing you or he/she can do",
"Yes",
"No"];
var question = "Should I do my homework?";
console.log(question);
console.log(magic8ball[Math.floor(Math.random() * 8)]);
var quote = "Magic 8 ball says";
//Insult GENERATOR
var InSuLt = ["crazy", "dumb"];
var i_n_s_u_l_t = ["sock", "thingy", "rock", "ship"];
var I_n_S_u_L_t = ["stinks", "is ripped and wrecked"];
var insult = InSuLt[Math.floor(Math.random() * 2)];
var insult2 = i_n_s_u_l_t[Math.floor(Math.random() * 4)];
var insult3 = I_n_S_u_L_t[Math.floor(Math.random() * 2)];
var insultGeneratorOutput = "Your " + insult + " " + insult2 + " " + insult3 + ".";
console.log("__________________________________");
console.log(quote);
console.log(insultGeneratorOutput);