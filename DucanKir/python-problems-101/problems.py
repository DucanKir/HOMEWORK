import math
from math import pi
# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return float(str(pi * radius**2))


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return (celcius * 1.8) + 32



# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    listn = [i for i in str(number)]
    listn.reverse()
    result = ''.join(str(e) for e in listn)

    return float(result)


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    newstring = string.replace(" ", "")
    list1 = list(newstring)
    list1.reverse()
    result = ''.join(str(e) for e in list1)
    if result == newstring:
        return True
    else: return False



# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    newstring = string.replace(" ", "")
    list1 = list(newstring.lower())
    srtlist = sorted(list1)
    result = ''.join(str(e) for e in srtlist)
    return result

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    list1 = string.split()
    result_list = []
    for i in list1:
        list_word = list(i)
        upp_letter = [list_word[0].upper()]
        lowletters = list_word[1: (len(list_word))]
        uppwordlist = upp_letter + lowletters
        uppword = ''.join(str(e) for e in uppwordlist)
        result_list.append(uppword)
    result = ' '.join(e for e in result_list)
    return result


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    newstring = string.replace(" ", "")
    list1 = list(newstring.lower())
    number_of_vowels = 0
    list_of_vowels = ['a', 'e', 'i', 'o', 'u']
    for i in list1:
        if i in list_of_vowels:
            number_of_vowels += 1
    return number_of_vowels


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    nl = '\n'
    return(len(string)+4)*'*'  + f'{nl}* { string } *{nl}' + (len(string)+4)*'*'


















##
