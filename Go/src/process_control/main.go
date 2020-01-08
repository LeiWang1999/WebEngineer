package main

import "fmt"

func main() {
	age := 19
	if age > 18 {
		fmt.Println("澳门首家线上赌场开业了")
	} else {
		fmt.Println("回去写暑假作业吧孩子")
	}
	for index := 0; index < 10; index++ {
		fmt.Println(index)
	}
	var name string = "你好，我是来自21世纪的王磊"
	for i, v := range name {
		fmt.Printf("%d, %c \n", i, v)
	}
}
