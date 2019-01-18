function autocomplete(string, query) {
	let trie = new TrieNode('start');
	string.forEach((word) => {
    let curr = trie;
	  for (let i = 0; i < word.length; i++) {
			let char = word[i];
			if (!curr.children[char]) {
				curr.children[char] = new TrieNode(char);
			}
			curr = curr.children[char];
		}
		curr.children['*'] = true;
  });

	let autocomplete = [];
	for (let x = 0; x < query.length; x++) {
		let char = query[x];
		if (trie.children[char]) {
			trie = trie.children[char];
		} else {
			return autocomplete;
		}
  }

  function recurse(node, string) {
    Object.keys(node.children).forEach((letter) => {
      if (letter === '*') {
        autocomplete.push(string);
      } else {
        recurse(node.children[letter], string + letter);
      }
    });
  }

  recurse(trie, query);
  return autocomplete;
}

function TrieNode(value) {
  this.value = value;;
  this.children = {};
}

console.log(autocomplete(['dog', 'deer', 'dear', 'hello', 'howdy', 'sup'], 'de')); // ['deer', 'dear']
