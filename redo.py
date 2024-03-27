in_file = open('haunted_places.json', 'r')
out_file = open('new_places.json', 'w')

##data = in_file.read()

rng = range(1570, 1600)

##for r in rng:
    ##print(data[r])


out_file.write('{\n\t"places": [\n')

lines = in_file.readlines()


for line in lines:
    out_file.write('\t\t' + line + ',\n')

##for n in range(0,10):
    ##out_file.write(str(n))




