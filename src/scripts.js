import App from './App.js';

new App();

// function toggleCharMenu() {
// 	console.log('toggle');
// 	const $charTab = d3.select('.character-container');
// 	if (charMenuOpen) {
// 		$charTab.style('display', 'none');
// 		charMenuOpen = false;
// 	} else {
// 		$charTab.style('display', 'block');
// 		charMenuOpen = true;
// 	}
// }

// async function setCharIndex(index) {
// 	charIndex = index;
// 	language = await getLanguage(characters[charIndex]);
// 	const charCards = document.querySelectorAll('.character-card');
// 	charCards.forEach((_, i) => {
// 		if (i === index) {
// 			charCards[i].className += 'character-card--selected';
// 		} else {
// 			charCards[i].className = 'character-card';
// 		}
// 	});

// 	if (charMenuOpen) {
// 		charMenuOpen = false;
// 	}

// 	renderMoveList();
// }

// async function getLanguage(char) {
// 	const result = await d3.json(`./assets/json/language/${char.first_name}.json`);
// 	return result;
// }

// async function setLangIndex(index) {
// 	langIndex = index;
// 	renderMoveList();
// }

// function getCommandFormat(command) {
// 	return command.map((c) => {
// 		if (c === '[' || c === ']') {
// 			return `<img class="move-card-command__arrow" src=${controlMap[c].image}>`;
// 		}

// 		if (c === 'or') { // or
// 			return `<span class="move-card-command__hint">or</span>`;
// 		}

// 		const className = controlMap[c].button ? 'move-card-command__button' : 'move-card-command__arrow';

// 		return `<img src=${controlMap[c].image} class=${className} />`;
// 	}).join('');
// 	// return '';
// }

// function getHitLevel(hitLevel) {
//   let list = hitLevel.map((level) => {
//     if (level.length === 1 || level === 'SP') {
//       return level;
//     }

//     return level.split('');
//   });
//   list = list.flat();
// 	const exp = list.map((l, i) => {
// 		let level = '', className = '';
// 		if (l === 'H') {
// 			level = 'HIGH';
// 			className = 'high';
// 		} else if (l === 'M') {
// 			level = 'MID';
// 			className = 'mid';
// 		} else if (l === 'L') {
// 			level = 'LOW';
// 			className = 'low';
// 		} else {
//       level = l;
//       className = 'special';
//     }

// 		return level
// 			? `<p class="move-card-hit-info__level--${className}">${level}</p>
// 				${i < list.length - 1 ? '<i class="fas fa-chevron-right"></i>' : ''}`
// 			: '';
// 	}).join('');

// 	return exp && `<div class="move-card-hit-info__level">${exp}</div>`;
// }

// function getDamage(list) {
// 	const exp = list.length > 1 && list.length < 10 ? list.join('+') : '';
// 	let sum = 0;
//   if (list.length && list[0] !== '-') {
//     sum = list.reduce((prev, curr) => {
//       if (curr.includes('x')) {
//         const index = curr.indexOf('x');
//         const first = curr.slice(0, index);
//         const second = curr.slice(index + 1);
//         return prev + (+first * +second);
//       }
//       return prev + +curr;
//     }, 0);
//   }
// 	return `
// 	<div class="move-card-hit-info__damage">
// 		<span class="move-card-hit-info__sum">${sum} Damage</span>
// 		<span class="move-card-hit-info__expression">${exp && `(${exp})`}</span>
// 	</div>`;
// }

// function getFrameFormat(type, frame) {
//   let suffix = '';
//   if (type === 'block') {
//     if (frame.includes('+')) {
//       suffix = 'positive';
//     } else if (frame.includes('-')) {
//       if (frame === '-') {
//         suffix = 'none';
//       } else {
//         num = frame.slice(1);
//         if (+num >= 10) {
//           suffix = 'negative';
//         } else {
//           suffix = 'zero';
//         }
//       }
//     } else {
//       suffix = 'none';
//     }
//   } else { // normal-hit, counter-hit
//     if (frame.includes('-')) {
//       if (frame === '-') {
//         suffix = 'none';
//       } else {
//         suffix = 'zero';
//       }
//     } else {
//       suffix = 'none';
//     }
//   }

// 	return `
//     <div class="move-frame__content move-frame__${type}">
//       <p class="move-frame__content--${suffix}">${frame}</p>
// 	  </div>
//   `;
// }

// function renderCharacterCard(table, char, index) {
// 	const card = `
// 			<td class="character-card ${charIndex === index ? 'character-card--selected' : ''}" colspan="2" onclick="setCharIndex(${index})">
// 				<img class="character-card__image" src="./assets/thumbnails/${char.first_name}_thumbnail.png">
// 				<p class="character-card__name">${char.first_name}</p>
// 			</td>
// 		`;
// 	table.append('tr').html(card);
// }

// async function renderMoveList() {
// 	const currentLanguage = LANGUAGE_LIST[langIndex];
	
// 	const headerName = d3.select('.movelist-header__name');
// 	const moveTable = d3.select('.move-table').select('tbody');
// 	const result = await d3.json(`./assets/json/movelist/${characters[charIndex].first_name}.json`);

// 	headerName.html(`${characters[charIndex].first_name} ${characters[charIndex].last_name}`);
// 	moveTable.html('');
// 	let index = 0;
// 	result.movelist.forEach((info) => {
// 		let card;
// 		if (info.start_frame && language[info.name][currentLanguage][0] !== '-') {
// 			index += 1;
// 			card = `
// 				<td class="move-card-container">
// 					<div class="left-card-pannel">
// 						<div class="move-card-header">
// 							<div class="move-card-header__index">${index}</div>
// 							<div class="move-card-header__name">${language[info.name][currentLanguage]}</div>
// 							<div class="move-card-header__hit-count">${info.hit_count} ${info.hit_count > 1 ? 'Hits' : 'Hit'}</div>
// 						</div>
// 						<div class="move-card-content">
// 							<div class="move-card-command">
// 								${language[info.command][currentLanguage]}
// 							</div>
// 							<div class="move-card-hit-info">
// 								${getHitLevel(info.hit_level)}
// 								${getDamage(info.damage)}
// 							</div>
// 						</div>
// 					</div>
// 					<div class="right-card-pannel">
// 						<div class="move-extra">
// 							${info.tail_spin ? '<p class="move-extra__tail-spin"></p>' : ''}
// 							${info.power_crush ? '<p class="move-extra__power-crush"></p>' : ''}
// 							${info.homing_attack ? '<p class="move-extra__homing-attack"></p>' : ''}
// 							${info.wall_bound ? '<p class="move-extra__wall-bound"></p>' : ''}
// 						</div>
// 						<div class="move-frame">
// 							<div class="move-frame__header">Start</div>
// 							<div class="move-frame__content">
//                 ${info.start_frame === '-' ? info.start_frame : `${info.start_frame}F`}
//               </div>
// 							<div class="move-frame__header">Block</div>
// 							${getFrameFormat('block', info.block_frame)}
// 							<div class="move-frame__header">Hit</div>
// 							${getFrameFormat('hit', info.normal_hit_frame)}
// 							<div class="move-frame__header">Counter</div>
// 							${getFrameFormat('counter', info.normal_hit_frame)}
// 						</div>
// 					</div>
// 				</td>
// 			`;
// 		} else {
// 			card = `
// 				<td class="move-card-container">
// 					<p class="move-card-header__name move-card-name-pannel">${language[info.name][currentLanguage].slice(1, -1)}</p>
// 				</td>
// 			`;
// 		}
// 		moveTable.append('tr').html(card);
// 	});
// }

// async function importData() {
// 	controlMap = await d3.json('./assets/json/controls.json');
// 	characters = await d3.json('./assets/json/characters.json');
// 	language = await getLanguage(characters[charIndex]);
// 	const charTable = d3.select('.character-table').select('tbody');
// 	characters.forEach((item, i) => renderCharacterCard(charTable, item, i));
// 	renderMoveList();
// }
