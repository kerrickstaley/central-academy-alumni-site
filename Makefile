build/caalum: *.go
	GOOS=linux GOARCH=amd64 go build -o $@ ./
