---
title: Neovimでtreesitterによるハイライト色を変える
pubDate: 2024-09-23
description: ''
---

NeoVimでTreeSitterによってハイライトさせているファイルの一部分の色を変えるときのメモ。

# 手順

## `:Inspect`でキャプチャを確認する
変えたい対象の部分にカーソルをおいた状態で`:Inspect`をすると`@keyword.directive.markdown links to Keyword markdown`のようなキャプチャ情報が得られる。
以前までは https://github.com/nvim-treesitter/playground をインストールする必要があったらしい。

参考: 日常に彩りを加える nvim-treesitter の設定術 https://zenn.dev/monaqa/articles/2021-12-22-vim-nvim-treesitter-highlight

## キャプチャに対してhlgroupの設定を確認する
`:highlight`の出力内容から`@keyword.directive.markdown`、または`@keyword`を探してカラーコードを見つける。
ちなみにこのとき、このようなコマンドを定義していると非常に便利。
https://github.com/kbwo/dotfiles/blob/df0292c1006a8876504b6a26a513b3c38e534e8c/.config/nvim/base.vim#L134-L148

```vim
" https://www.rasukarusan.com/entry/2021/09/19/125635
function! s:show_ex_result(cmd)
  redir => message
  silent execute a:cmd
  redir END
  if empty(message)
    echoerr "no output"
  else
    tabnew
    setlocal buftype=nofile bufhidden=wipe noswapfile nobuflisted nomodified
    silent put=message
    normal gg
  endif
endfunction
command! -nargs=+ -complete=command ShowExResult call s:show_ex_result(<q-args>)
```

## 見つかったカラーコードをcolor schemeのコードを検索して適宜カスタマイズする

例えば私が使っている https://github.com/rebelot/kanagawa.nvim で `#957FB8`を検索すると `oniViolet`が関係していることがわかる。
そこまでわかったら、https://github.com/rebelot/kanagawa.nvim?tab=readme-ov-file#customization に従ってcolor schemeに渡す設定を調整するのみである。

