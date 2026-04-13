# migrate移行の実行
- npx prisma migrate dev --name init

# prisma studio
　現在のDBの状態を確認できる場所。ここからテーブルを追加、削除という操作ができる。
- npx prisma studio

## prisma studioでうまく操作が実行されない
考えられる原因はdev.dbの場所とタイピングミスであった。はじめにタイピングミスを探した。その結果、schema.prismaのcreatedAt～の部分にタイピングミスがあり、修正した結果、実行できた。問題があるであろう場所を考えてから修正することで素早く解決することができた。