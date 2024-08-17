docker build -t 19122002/prime-image .   
docker run -p 3000:3000 19122002/prime-image
k6 run test/test.js


kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
kubectl get ns
kubectl -n kube-system get pods
kubectl top node