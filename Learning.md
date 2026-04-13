# migrate移行の実行
- npx prisma migrate dev --name init

# prisma studio
　現在のDBの状態を確認できる場所。ここからテーブルを追加、削除という操作ができる。
- npx prisma studio

## prisma studioでうまく操作が実行されない
考えられる原因はdev.dbの場所とタイピングミスであった。はじめにタイピングミスを探した。その結果、schema.prismaのcreatedAt～の部分にタイピングミスがあり、修正した結果、実行できた。問題があるであろう場所を考えてから修正することで素早く解決することができた。

# /src/app/api/route.ts作成時のエラー
- Module not found: Can't resolve '@prisma/client/runtime/client'
これはprisma Clientの生成物とimportパスの不一致が原因

## npx prisma generate実行時のエラー
Prisma7ではschema.prismaにurlを隠しようが廃止されたが、コードに記述していたことが原因である。

# GET APIの疎通確認を完了し、環境依存エラー（prismaのバージョン不整合）を解決した(2026-04-13)

エラーの原因は、Prisma 5.x を使用していたが、SQLite アダプタがまだサポートされていないため、PrismaClient のインスタンス化に必要なオプションが不足していたことです。Prisma を 4.16.2 にダウングレードし、適切な設定に修正しました。

package.json: Prisma と @prisma/client を 4.16.2 にダウングレード。
prisma/schema.prisma: generator を prisma-client-js に変更し、output を削除。
.env: DATABASE_URL="file:./dev.db" を追加。
src/app/api/tasks/route.ts: import を @prisma/client に変更し、グローバルインスタンスを使用するように修正。
パッケージを再インストールし、Prisma Client を再生成、マイグレーションを実行。

## 気になること
- ORMってなに
- prismaとは何をしているツールか
- schema.prismaを変更したら、なぜprisma generateが必要か
- .envの役割何
- GET /api/tasks はどのファイルで定義されているか？
- API が DB にアクセスできているかは、何を見れば判断できるか？
- 
- 
- 
- 
- 
- 