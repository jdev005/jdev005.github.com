( function ( $ ) {
	'use strict';

	var teTransliteration = {
		id: 'te-transliteration',
		name: 'లిప్యంతరీకరణ',
		description: 'Telugu Transliteration based on RTS',
		date: '2012-10-16',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Veeven and Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 1,
		maxKeyLength: 4,
		patterns: [
			['(మ్|న్)b', 'ంబ్'],
			['(మ్|న్)B', 'ంభ్'],
			['(మ్|న్)c', 'ంచ్'],
			['(మ్|న్)C', 'ంఛ్'],
			['(మ్|న్)d', 'ంద్'],
			['(మ్|న్)D', 'ండ్'],
			['(మ్|న్)[fFP]', 'ంఫ్'],
			['(మ్|న్)g', 'ంగ్'],
			['(మ్|న్)h', 'ంహ్'],
			['(మ్|న్)j', 'ంజ్'],
			['(మ్|న్)J', 'ంఝ్'],
			['(మ్|న్)k', 'ంక్'],
			['(మ్|న్)L', 'ంళ్'],
			['(మ్|న్)p', 'ంప్'],
			['(మ్|న్)r', 'ంర్'],
			['(మ్|న్)s', 'ంస్'],
			['(మ్|న్)t', 'ంత్'],
			['(మ్|న్)T', 'ంట్'],
			['(మ్|న్)[vwVW]', 'ంవ్'],
			['(మ్|న్)[xX]', 'ంక్ష్'],

			// & for forcing combination
			['(మ్|న్)&b', '$1బ్'],
			['(మ్|న్)&B', '$1బ్'],
			['(మ్|న్)&c', '$1చ్'],
			['(మ్|న్)&C', '$1ఛ్'],
			['(మ్|న్)&d', '$1ద్'],
			['(మ్|న్)&D', '$1డ్'],
			['(మ్|న్)&[fFP]', '$1ఫ్'],
			['(మ్|న్)&g', '$1గ్'],
			['(మ్|న్)&h', '$1హ్'],
			['(మ్|న్)&j', '$1జ్'],
			['(మ్|న్)&J', '$1ఝ్'],
			['(మ్|న్)&k', '$1క్'],
			['(మ్|న్)&L', '$1ళ్'],
			['(మ్|న్)&p', '$1ప్'],
			['(మ్|న్)&r', '$1ర్'],
			['(మ్|న్)&s', '$1స్'],
			['(మ్|న్)&t', '$1త్'],
			['(మ్|న్)&T', '$1ట్'],
			['(మ్|న్)&[vwVW]', '$1వ్'],
			['(మ్|న్)&[xX]', '$1క్ష్'],
			['(మ్|న్)&(\\s|\\.|\\, |\\))', '$1$2'],
			// అ
			['([క-హ]|ౘ|ౙ)్a', '$1'],
			// ఆ
			['([క-హ])(్A|a|\')', '$1ా'],
			// ఇ
			['([క-హ])్i', '$1ి'],
			// ఈ
			['([క-హ])(్I|ిi|ి\'|ెe)', '$1ీ'],
			// ఉ
			['([క-హ])్u', '$1ు'],
			// ఊ
			['([క-హ])(ుu|ు\'|ుa|్U)', '$1ూ'],
			['([క-హ])ొo', 'o', '$1ూ'],
			// ఋ
			['([క-హ])్R', '$1ృ'],
			['([క-హ])్ర్\'', '$1ృ'],
			// ౠ
			['([క-హ])ృu', '$1ౄ'],
			// ఌ
			['([క-హ])్~l', '$1ౢ'],
			// ౡ
			['([క-హ])ౢ(l|\')', '$1ౣ'],
			// ఎ
			['([క-హ])్e', '$1ె'],
			// ఏ
			['([క-హ])(్E|ెa|ె\')', '$1ే'],
			['([క-హ])e', 'a', '$1ే'],
			// ఐ
			['([క-హ])ెi', '$1ై'],
			['([క-హ])i', 'a', '$1ై'],
			// ఒ
			['([క-హ])్o', '$1ొ'],
			// ఓ
			['([క-హ])(్O|ొa|ొ\')', '$1ో'],
			// ఔ
			['([క-హ])(ొu|ొw)', '$1ౌ'],
			['([క-హ])u', 'a', '$1ౌ'],

			// TODO: handle back corrections
			/* not working			['([క-హ])u', '$1ు'],
			['([క-హ])U', '$1ూ'],
			['([క-హ])E', '$1ే'],
			*/

			// zwnj
			['(్)\\^', '$1\u200c'],

			// sunna ending
			['మ్(\\s|\\.|\\, |\\))', 'ం$1'],

			// standalone vowels
			['అ(a|\')', 'ఆ'],
			['ఇ(i|\')', 'ఈ'],
			['ఎe', 'ఈ'],
			['ఉ(u|\')', 'ఊ'],
			['ఒo', 'ఊ'],
			['ఎ(a|\')', 'ఏ'],
			['అe', 'a', 'ఏ'],
			['ఎi', 'ఐ'],
			['అi', 'a', 'ఐ'],
			['ఒ(a|\')', '', 'ఓ'],
			['అo', 'a', 'ఓ'],
			['ఒ(u|w)', 'ఔ'],
			['అu', 'a', 'ఔ'],
			['ఋ(u|\')', 'ౠ'],
			['ర్\'', 'ఋ'],

			// mahaa prana
			['క్h', 'ఖ్'],
			['గ్h', 'ఘ్'],
			['జ్h', 'ఝ్'],
			['చ్\'', 'ఛ్'],
			['చ్h', 'చ్'],
			['స్h', 'ష్'],
			['స్\'', 'శ్'],
			['త్\'', 'ట్'],
			['ట్h', 'ఠ్'],
			['ద్\'', 'డ్'],
			['డ్h', 'ఢ్'],
			['న్\'', 'ణ్'],
			['త్h', 'థ్'],
			['ద్h', 'ధ్'],
			['ప్h', 'ఫ్'],
			['బ్h', 'భ్'],
			['ల్\'', 'ళ్'],

			// basic
			['a', 'అ'],
			['b', 'బ్'],
			['~c', 'ౘ్'],
			['c', 'చ్'],
			['d', 'ద్'],
			['e', 'ఎ'],
			['(f|F|P)', 'ఫ్'],
			['g', 'గ్'],
			['@h', 'ః'],
			['h', 'హ్'],
			['i', 'ఇ'],
			['~j', 'ౙ్'],
			['j', 'జ్'],
			['k', 'క్'],
			['~l', 'ఌ'],
			['l', 'ల్'],
			['@m', 'ఁ'],
			['~m', 'ఙ'],
			['m', 'మ్'],
			['~n', 'ఞ'],
			['n', 'న్'],
			['o', 'ఒ'],
			['p', 'ప్'],
			['q', 'క్వ్'],
			['~r', 'ఱ్'],
			['r', 'ర్'],
			['s', 'స్'],
			['t', 'త్'],
			['u', 'ఉ'],
			['(v|w|V|W)', 'వ్'],
			['(x|X)', 'క్ష్'],
			['(y|Y)', 'య్'],
			['(z|Z)', 'జ్'],
			['A', 'ఆ'],
			['B', 'భ్'],
			['C', 'ఛ్'],
			['D', 'డ్'],
			['E', 'ఏ'],
			['G', 'ఘ్'],
			['H', 'ః'],
			['I', 'ఈ'],
			['J', 'ఝ్'],
			['K', 'ఖ్'],
			['L', 'ళ్'],
			['M', 'ం'],
			['N', 'ణ్'],
			['O', 'ఓ'],
			['Q', 'క్వ్'],
			['R', 'ఋ'],
			['S', 'శ్'],
			['T', 'ట్'],
			['U', 'ఊ'],

			/**
			 * Telugu numbers
			 */
			['~0', '౦'],
			['~1', '౧'],
			['~2', '౨'],
			['~3', '౩'],
			['~4', '౪'],
			['~5', '౫'],
			['~6', '౬'],
			['~7', '౭'],
			['~8', '౮'],
			['~9', '౯'],

			// others
			['।~\\.', '॥'], // double danda
			['~\\.', '।'], // danda
			['//', 'ఽ'], // avagraha
			['~\\$', '₹']] // rupee
	};
	$.ime.register( teTransliteration );

}( jQuery ) );

