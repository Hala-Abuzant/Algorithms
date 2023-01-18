import java.util.Arrays;   
import java.util.Collections;   
public class SortArray 
{   
public static void main(String[] args)   
{   
   
Integer [] array =  {90, 23, 5, 109, 12, 22, 67, 34};  
 
Arrays.sort(array,Collections.reverseOrder());   
System.out.println("Elements of array sorted in descending order: ");  

for (int i = 0; i < array.length; i++)   
{       
System.out.println(array[i]);   
} 
System.out.println("Enter the number nth: ");  
String number= System.console().readLine();
int nth=Integer.parseInt(number);  
System.out.println("the second largets number:"+array[1]);  
System.out.println("the Nth largets number:"+array[nth-1]);  
}  
}  