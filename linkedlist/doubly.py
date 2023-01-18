class Node :

    def __init__(self,value):
        self.prv=None
        self.next=None
        self.value=value



class DList:
    def __init__(self):
        self.head=None

    def append(self,value):
        if self.head==None:
            self.head=Node(value)
        else :
            current=self.head
            while current.next!=None:
                current=current.next
            current.next=Node(value)

    def reverse(self):
        current=self.head
        while current!=None:
            nxt=current.next
            current.next=current.prv
            current.prv=nxt
            current=current.next

    def traverse(self):
        current=self.head
        while current!=None:
            print(current.value)
            current=current.next




D=DList()
D.append(3)
D.append(5)
D.append(7)

D.traverse()

