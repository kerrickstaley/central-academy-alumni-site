#!/bin/sh

server='caalum@ec2-54-187-82-60.us-west-2.compute.amazonaws.com'

echo '== Pushing static files' >&2
scp -r static ${server}:

echo '== Building API binary' >&2
go build main.go && {
  echo '== Pushing API binary' >&2
  ssh ${server} 'killall caalum_api'
  scp main ${server}:caalum_api
  ssh ${server} 'nohup ./caalum_api >> caalum_api.out 2>> caalum_api.err &'
}

if [ "$USER" == kerrick ]; then
  echo '== Pushing Nginx config' >&2
  ssh aws 'sudo sh -c "cat > /etc/nginx/sites-available/caalum"' < nginx_conf_file
  ssh aws 'sudo nginx -s reload'
fi
