# Kafka Cluster 구축

```bash
cd kafka-cluster
```

```bash
docker compose up -d
```

# Kafka Producer 실행

```bash
cd kafka-producer
```

```bash
npm i
```

```bash
npm run start
```

-   localhost:3000에 접속하면 kafka 토픽에 메시지가 작성됨
-   localhost:9000에 접속해 토픽에 메시지가 작성됬는지 확인 할 수 있음

# Kafka Consumer 실행

```bash
cd kafka-consumer
```

```bash
npm i
```

```bash
npm run start
```

-   kafka-producer로 메시지를 작성하면 console에서 메시지를 확인할 수 있음
