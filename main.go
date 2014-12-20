package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
)

func main() {
	var (
		port = flag.Int("port", 8080, "http listen port")
	)
	flag.Parse()

	static := http.FileServer(http.Dir("static"))
	http.Handle("/", static)

	addr := fmt.Sprintf(":%d", *port)
	log.Println("listening at", addr)
	log.Fatal(http.ListenAndServe(addr, nil))
}
