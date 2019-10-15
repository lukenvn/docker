sudo kill -9 $(sudo lsof -t -i:6969) 
## run build
npm run build
## start server 
serve -s ./build -l 6969 &  
