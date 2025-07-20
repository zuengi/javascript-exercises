const repeatString = function(input, numb) {
if (numb < 0) { return 'error'}
let string = "";
for (let i = 0; i < numb; i++)
{
    string += input;
}
return string;
};

// Do not edit below this line
module.exports = repeatString;
