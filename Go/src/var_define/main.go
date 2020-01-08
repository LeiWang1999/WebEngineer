package main

import "fmt"

// 单独声明
var name string = "Princeling"
var age int
var isOK bool

// 批量声明
var (
	weight float32
	height float32
)

func main() {
	name = "Princeling"
	age = 21
	isOK = true
	fmt.Print(name + "\n")            // print a string
	fmt.Printf("name is %s \n", name) //print format a string
	fmt.Println("hello Lei")          // print a string with /n
}
