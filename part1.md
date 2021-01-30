1. This line will print the value of i because we declare the variable i using var which does not have scope restriction.
2. This line will print the value of discountedPrice because we declare the variable i using var which does not have scope restriction.
3. This line will print the value of finalPrice because the variable was declared outside of the loop, so the variable was in scope of line 13.
4. The function will return an array of the discountedPrice which is [50, 100, 150]. This is the ouput because the function takes in an array of prices and discount value and
calculate the new price and put each price into a new array that gets return to the user.
5. This will cause an error because the variable i is not in the scope of line 11. Since we are using let to create a variable, there is scope restriction.
6. This will cause an error because the variable discountedPrice is not in the scope of line 11. Since we are using let to create a variable, there is scope restriction.
7. This will print the value of finalPrice because this variable is defined outside of the for-loop. This makes it in scope with line 13.
8. Similar to question 4, the function will return  an array of the discountedPrice which is [50, 100, 150]. This is the ouput because the function takes in 
an array of prices and discount value and calculate the new price and put each price into a new array that gets return to the user.
9. This will cause a error because declaring a variable using const have the same behavior as using let. For the same reason as let, declaring a variable with const has 
scope restriction and the variable i was declared inside the for-loop which is not in scope with line 11.
10. This will cause a error because declaring a variable using const have the same behavior as using let. For the same reason as let, declaring a variable with const has 
scope restriction and the variable discountedPrice was declared inside the for-loop which is not in scope with line 12.
11. Line 13 will print out the value of finalPrice if we assume that line 6 works also. finalPrice is defined outside the loop and it is in scope with line 12.
12. The function would not return anything but throw an error instead because in line 6, we declare discountedPrice as a const, meaning we cannot reassign the value. Since the 
for-loop assign a new value to discountedPrice at every iteration of the loop, the function will throw an error.
13. A) student.name;
B) student["grad year"];
C) student.greeting();
D) student["Favorite Teacher"].name;
E) student.courseLoad[0];
14. A) 5 
B) 1
C) 3
D) 3
E) 4
F) 0
G) undefined
H) undefined

15. A) true
B) true
C) true
D) false
E) false
F) true
16. The difference between == and === is === check for if the value AND type of the two input to be the same or different. == only checks if they have the same value.
17. The string "Hello!" will get printed because the first if statement is satisfied. The rest is skipped because they or else if statement meaning it only check if the 
previous statement is false.
