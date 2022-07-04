def transition_function(P):
    '''
    A utility function that creates a PI table needed to
    avoid back-tracking on 'Text' array.
    :param P:
    :return a:
    '''
    m = len(P)
    k=0
    a=[0]*m
    for i in range(1,m):
        while k>0 and P[k]!=P[i]:
            k=a[k-1]
        if P[k]==P[i]:
            k += 1
            a[i]=k
    return a
def KnuthMorrisPratt(T,P):
    '''
    The main algorithmic implementation of KMP Algorithm to search against
    the given search. We return count of matched patterns.
    :param T:
    :param P:
    :return count:
    '''
    k=0
    m=len(P)
    n=len(T)
    flag=0
    count = 0
    a = transition_function(P)
    for i in range(n):
        while k>0 and T[i]!=P[k]:
            k=a[k-1]
        if T[i]==P[k]:
            if k == m - 1:
                #print("Shift found at ", i - m + 1)
                count+=1
                flag = 1
                k = a[k]
            else:
                k+=1

    return count
