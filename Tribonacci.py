def tri(n):

    
    if (n >2):

        result=tri(n-3)+tri(n-2)+tri(n-1)
        print(result)

    else:
        if(n==0):
            return 0
        if(n==1):
            return 1
        if(n==2):
            return 1

    
tri(6)