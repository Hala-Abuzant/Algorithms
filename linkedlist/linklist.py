
class Node:
    def __init__(self,value):

        self.value=value
        self.next=None

class LinkedList:
    def  __init__(self):
        self.head=None

    def traverse(self):
        current=self.head
        
        while current is not None:
            print(current.value)
            current = current.next
            


list1=LinkedList()
list1.head=Node("amin")
list1.head.next=Node("hala")
list1.head.next.next=Node("sura")
list1.traverse()
