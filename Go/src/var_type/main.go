package main

import (
	"fmt"
	"math"
)

func main() {
	i1 := 120
	fmt.Printf("i1 is %d \n", i1)
	i2 := 0120
	fmt.Printf("i2 is %d \n", i2)
	i3 := 0x120
	fmt.Printf("i3 is %d \n", i3)

	// define int8 variable
	i4 := int8(9)
	fmt.Printf("varible type is %T \n", i4)

	fmt.Println("#########FLOAT#######")

	f1 := math.MaxFloat32
	fmt.Println(f1)
	f2 := 1.2
	f3 := 1.2
	if f3 == f2 {
		fmt.Println("Wow")
	}
}
