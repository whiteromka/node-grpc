const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = '/proto/hello.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition).hello;

// методы
function sayHello(call, callback) {
    console.log('method sayHello. Request:', call.request);
    callback(null, { message: 'Hello ' + call.request.name });
}

function sayGoodbye(call, callback) {
    console.log('method sayGoodbye. Request:', call.request);
    callback(null, { message: 'Goodbye ' + call.request.name });
}

// сервер
const server = new grpc.Server();
server.addService(proto.HelloService.service, {
    SayHello: sayHello,
    SayGoodbye: sayGoodbye,
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`gRPC server running on port ${port}`);
});
