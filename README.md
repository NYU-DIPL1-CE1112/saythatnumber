# Say That Number
*Write a program that will take a number and spell out that number in English.*

##The Basic Program
*Handle numbers between 0 and 999*

###Step 1
*Handle the basic case of 0 through 99.*

If the input to the program is `22`, then the output should be `'twenty-two'`.

Some good test cases for this program are:

 - 0
 - 14
 - 50
 - 98

###Step 2
Implement breaking a number into chunks.

So `547` should yield a list like 5, 47.

###Step 3
Now handle inserting the appropriate scale word between those numbers.

So `547` should yield `'5 hundred 47'`

###Step 4
Put it all together to output a plain English string.
`'547'` should yield `'five hundred forty-seven'`

##The Advanced Program
*Handle the case of 0 through 999,999,999,999.*

###Step 1
Same as above; handle the basic case of 0 through 99.

##Step 2
Implement breaking the number up into three number chunks.

So `1234567890` should yield a list like 1, 234, 567, and 890, while the far simpler `1000` should yield just 1 and 0.

###Step 3
Same as above; handle inserting the appropriate scale word between the three numbers.

So `123` should yield `'1 hundred 23'`

##Step 4
Now handle inserting the appropriate scale word between the chunks.

So `1234567890` should yield `'1 billion 234 million 567 thousand 890'`

##Step 5
Put it all together to get nothing but plain English.

`12345` should yield `twelve thousand three hundred forty-five`.


####Notes
Be sure to update the `max` attribute on the `#numberEntry` input in the `index.html` file to allow larger numbers.

####Bonus
Instead of HTML5 validations, have the program report any values that are out of range (including negative numbers and letters)

####Hints
Some valuable methods for this project
[JavaScript for Statement](http://www.w3schools.com/jsref/jsref_for.asp)
[JavaScript String split&#40;&#41; Method](http://www.w3schools.com/jsref/jsref_split.asp)
[JavaScript Array concat&#40;&#41; Method](http://www.w3schools.com/jsref/jsref_concat_array.asp)
[JavaScript Array join&#40;&#41; Method](http://www.w3schools.com/jsref/jsref_join.asp)