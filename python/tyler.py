from functools import reduce

def reducer(num1, num2, operator):
    num1 = int(num1)
    num2 = int(num2)
    if operator == '+':
        return reduce(lambda element,total: element + total, [num1, num2] )
    elif operator == '-':
        return reduce(lambda element,total: element - total, [num1, num2] )
    elif operator == '/':
        return reduce(lambda element,total:  element / total, [num1, num2] )
    elif operator == '*':
        return reduce(lambda element,total:  element * total, [num1, num2] )

print(reducer(input('First num: '),input('second num: '),input('input operator: ')))