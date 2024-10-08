# WaxMatch(ヘアワックス推薦Webアプリ)  
# デプロイ先のURL  
https://hodakaanzai.github.io/wax-app/  

# アプリの概要  
![スクリーンショット 2024-09-29 181341](https://github.com/user-attachments/assets/8681cc1c-b394-4ab9-96ea-4ce6a95439d7)



男性向けに、自分の髪質、希望のヘアワックスのセット力とツヤ感を選択することで自分に合ったヘアワックスを提案してくれるwebアプリです！  

webアプリが提案してくれるヘアワックスは、LIPPUSさんとOCEAN TRICOさんが出しているヘアワックスから選出しました。  

## アプリのコンセプト  
今回は、20代男性でヘアワックスを使うのが初めての方をターゲットとしました。  
そのため、黒と白を基調としたシンプルなデザインにすることで男性をイメージとさせるレイアウトにしました。  
加えて、誰もが使いやすいようにボタンの項目は少なくさせて、ボタンが押された時や検索ボタンの色にコントラストをつけました。 


# 開発理由  
## 初心者が自分に合ったヘアワックスを選ぶのが難しい  

  個人的にヘアワックスの種類が多すぎて、どれを選べばいいか迷ってしまうことがありました。そこで、自分の髪質や、ワックスに求めるセット力やツヤ感を選ぶだけで、簡単におすすめのヘアワックスを提案してくれるアプリがあれば便利だと感じ、今回このアプリを開発しました！
  
# 使用技術  
* 環境構築：Vite
* フロントエンド: React, TypeScript
* バックエンド: Firebase Authentication, Firebase Firestore

## 使い方は簡単！
### 各質問の答えに合うと思うボタンを一つ選択するだけです。
![スクリーンショット 2024-09-29 190725](https://github.com/user-attachments/assets/3335f5a3-ea6f-46bb-8372-fa43b3ba7908)  
![スクリーンショット 2024-09-29 191221](https://github.com/user-attachments/assets/ef824117-a10d-4fff-b850-7cc4f2c19ae8)  
## ボタンの選択が終わったら、検索ボタンを押します

### 提案されたヘアワックスの例  

![スクリーンショット 2024-09-29 190341](https://github.com/user-attachments/assets/30f4cfa9-0e6a-4f8f-91f6-5bc087095b98)  
青色のお気に入りボタンを押すと、お気に入りリストに追加できます！

## お気に入りリストに追加  
### お気に入りリストに追加されたヘアワックスを確認するには、gooogleアカウントでログインする必要があります。
![スクリーンショット 2024-09-29 192108](https://github.com/user-attachments/assets/b2459512-855b-4d6a-9464-d4337a15fa26)

リストから削除を押すと、お気に入りリストからデータを削除できます。


  
 
