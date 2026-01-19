li =[[1,2,3],[4,5,6],[7,8,9],[10,11]]
row = len(li)
col = len(li[0])
largest = -1
for i in range(row-1):
    sum =-1
    for j in range(col-1):
        sum+=li[j][i]
    if sum>largest:
        largest = sum
print(largest)