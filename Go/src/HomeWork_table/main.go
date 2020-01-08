package main

import "fmt"

func main() {
	const maxLength = 9
	for i := 1; i <= maxLength; i++ {
		for j := 1; j <= maxLength; j++ {
			if i >= j {
				fmt.Printf("%d * %d = %d\t", i, j, i*j)
			}
		}
		fmt.Println()
	}

}
