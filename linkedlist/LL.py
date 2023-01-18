class Node:
    def __init__(self,value):
        self.value=value
        self.next=None
    
class LinkedList:
    def __init__(self):
        self.head=None
    
    def traverse(self):
        current=self.head
        while current is not None:
            print(current.value)
            current=current.next

    def addtotail(self,val):
        if self.head==None:
            self.head=Node(val)
        else:
            current=self.head
            while current.next is not None:
                current=current.next
            current.next=Node(val)   
    
    def delete(self,position):
        pass

        


list2=LinkedList()

list1=LinkedList()
list1.head=Node("amin")
list1.head.next=Node("Ahmad")
list1.head.next.next=Node("thabet")
list1.addtotail("Zaki")

list2.addtotail("Jamal")

list1.traverse()
list2.traverse()
