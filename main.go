package main

import (
  "fmt"
  "net"
  "net/http"
  "net/http/fcgi"
  "os"
  "time"
)

type FastCGIServer struct{}

func (s FastCGIServer) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
  resp.Write([]byte("{}"))
}

func main() {
  fmt.Fprintln(os.Stderr, "Server started at ", time.Now().String())

  listener, err := net.Listen("tcp", "127.0.0.1:9000")
  if err != nil {
    fmt.Fprintln(os.Stderr, "Failed to open socket 9000: ", err)
    os.Exit(1)
  }

  srv := new(FastCGIServer)
  err = fcgi.Serve(listener, srv)
  if err != nil {
    fmt.Fprintln(os.Stderr, "Server crashed: ", err)
    os.Exit(1)
  }

  fmt.Fprintln(os.Stderr, "Server stopped at ", time.Now().String())
}
