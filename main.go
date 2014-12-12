package main

import (
  "fmt"
  "net"
  "net/http"
  "net/http/fcgi"
  "os"
)

type FastCGIServer struct{}

func (s FastCGIServer) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
  resp.Write([]byte("{}"))
}

func main() {
  listener, err := net.Listen("tcp", "127.0.0.1:9000")
  if err != nil {
    fmt.Fprint(os.Stderr, "Failed to open socket 9000: ", err)
  }

  srv := new(FastCGIServer)
  err = fcgi.Serve(listener, srv)
  if err != nil {
    fmt.Fprint(os.Stderr, "Server crashed: ", err)
  }
}
