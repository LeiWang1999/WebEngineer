package main

import "fmt"

func main() {
	var a = []int{1, 2, 3, 4, 5, 6, 7, 8}
	fmt.Println(a)
	fmt.Printf("Lenth of a is %d , Cap of a is %d \n", len(a), cap(a))

	a = a[1:2]
	fmt.Printf("Lenth of a is %d , Cap of a is %d \n", len(a), cap(a))
	a = a[:5]
	fmt.Printf("Lenth of a is %d , Cap of a is %d \n", len(a), cap(a))
	a = a[3:]
	fmt.Printf("Lenth of a is %d , Cap of a is %d \n", len(a), cap(a))

}
