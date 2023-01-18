#  print("Enter the year:")
#     year = input()
#     year=int(year)


def leap(year):
    
    if (year%4 == 0 and year%100!= 0) or (year%400 == 0) :
       return True
    else :
        return False
        

print(leap(1600))
print(leap(1700))
print(leap(2004))



def count_substring(string,substring):
    count=0
    count = string.count(substring)
    return count
    


string1 = "ABSHIZLMSHIZ,HIZ"
substring1 = "HIZ"

print(count_substring(string1,substring1))
