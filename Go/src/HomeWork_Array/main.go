package main

import "fmt"

func main() {
	var a = [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	var sum = 0
	const dis = 8
	for _, i := range a {
		sum += i
	}
	fmt.Println(sum)
	for _, i := range a {
		for _, j := range a {
			if i+j == dis {
				fmt.Println(i, j)
			}
		}
	}
}
