# Gilded Rose Refactoring Kata

This is a refactor of a code design created by Emily Bache. I refactored the code, and added an update to the system per the original Gilded Rose Refactoring Kata instructions here: https://github.com/NotMyself/GildedRose. 

I also wrote the accompanying unit tests to ensure that the newly refactored code still works successfully. Using the unit tests, I was able to incrementally improve the design while running the unit tests often, to ensure that my design update still allowed the code to perform within the specified paramenters. 

My goal during refactoring was to cut down on the amount of nested if statements. This required identifying the type of item I was operating on, and then writing a logic method for each. I pulled the degrade rates into variables that will allow me to easily make future changes if the degradation rate changes again. 

Doing it this way consolidated huge amounts of the original code, and made it read easier for other developers. 
