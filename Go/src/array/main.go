package main

import "fmt"

func main() {
	var a = [3]int{1, 2, 3}
	fmt.Print(a)
	a1 := [...]int{1, 2, 3, 4, 5, 6, 7, 8}
	fmt.Print(a1)

	var cities = [...]string{"南京", "北京", "上海"}
	for _, city := range cities {
		fmt.Println(city)
	}

	var domian2 = [3][2]int{
		[2]int{1, 2},
		[2]int{3, 4},
		[2]int{5, 6},
	}
	fmt.Println(domian2)
	for _, i := range domian2 {
		fmt.Println(i)
		for _, j := range i {
			fmt.Println(j)
		}
	}
}
