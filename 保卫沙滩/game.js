var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "加载完毕 ",
                Loading: "游戏加载中...",
                Close: "关闭"
            },
            Header: {
                ReadyIn: "加载完毕 ",
                Loading: "游戏加载中...",
                Close: "关闭"
            },
            End: {
                ReadyIn: "广告 ",
                Loading: "请稍等 ...",
                Close: "关闭"
            }
        }
    },
    Splash: {
        Loading: "加载 ...",
        LogoLine1: "这里有一些文字",
        LogoLine2: "由MarketJS提供支持",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "选择球员",
        Win: "胜利!",
        Lose: "失败了!",
        Score: "分数:",
        Time: "时间",
        WaveComing: "第一波开始",
        WaveComplete: "第一波结束",
        LoseTitle: "你到达",
        Wave: "波 ",
        Combo: "最长的组合:",
        Accuracy: "精度:",
        Pause: "暂停",
        Music: "音乐",
        Sound: "声音",
        Option: "选项",
        Control: "控制",
        Type: "输入字母射击!",
        Enter: "回车进行播放",
        Shift: "Shift切换到部署轰炸机.",
        Space: "空格/ESC 转移一个单词"
    },
    Results: {
        Title: "高分"
    },
    DICT: {
        1: "abcdefghijklmnopqrstuvwxyz".split(""),
        2: "am an as at be by cs do go he if in is it me my no of oh on or pi re so to up us we".split(" "),
        3: "act add age ago aid aim air all and any are arm art ask ate bad ban bar bed bet bid big bit box boy bug bus but buy can car cat cry cup cut day did die doe dog dry due eat end err eye fan far fed few fit fix fly for fry fun gap gas get got gun guy had has hat her hid him his hit hot how ice ill its job joy key kid law lay led leg let lie log lot low mad man map may men met mix mod net new nor not now odd off oil old one our out owe own pay pen per pop put ran raw red rid row run sad sat saw say see set she sit six son sum sun tax tea ten the tie tin too top try two use van via war was way who why win won yes yet you".split(" "),
        4: "able acts adds ages aims also area army asks away back ball band bank bars base bear been best bets bids bill bind bite bits blow blue boat body book boot bore both bugs bulk bury busy buys byte call came card care case cell cent char chip city club clue code cold come cope copy core cost cure cuts dare dark data date days dead deal dear deem deep desk died dies disc disk does done door down draw drew drop dumb dump duty each ease east easy eats edge edit else ends even ever eyes face fact fail fair fall farm fast fate fear feed feel feet fell felt file fill film find fine fire firm fish fits five flag flat flew flow folk food foot form four free from full fund gain game gave gets girl give glad goes gone good grew grow hack hair half hall hand hang hard harm hate have head hear heat held hell help here hide high hill hint hits hold hole home hope host hour huge hung hunt idea inch info into item jobs join joke jump junk just keen keep kept keys kill kind king knew know lack lady lain land last late laws lazy lead leaf left legs lend less lets lied lies life lift like line link list live load loan lock logs long look loop lose loss lost lots love luck made mail main make many mark mass mean meet mere mess mile mind mine miss mode more most move much must name near neck need news next nice nine none note numb obey odds omit once ones only onto open ours over owed owes pack page paid pain pair park part pass past path pays peak pick pile pint pipe plan play plea plot plug plus poem poet poll pool poor port post pull pure push puts putt quit race rain rare rate read real rely rest ride rids ring rise risk road role roll room root rule runs rush safe said sake sale same save says scan seek seem seen sees self sell send sent sets ship shop show shut side sign site sits size slip slow soft sold some soon sort spot stay step stop such suit sure take talk tank tape task team tell tend term test text than that them then they thin this thus tied ties till time told took town trap tree trip true tune turn type ugly unit upon used user uses vary vast very vice view vote wait walk wall want warm warn wash ways wear week well went were west what when whom wide wife wild will wind wine wins wire wise wish with word wore work worn year your zero".split(" "),
        5: "about above abuse acted added admit adopt after again agree ahead aimed alarm album alias alive allow alone along alter among amuse angle angry annoy apart apple apply areas argue arise aside asked avoid awake award aware awful backs badly based bases basic basis bears began begin begun being below binds bites black blame blank block board books borne bound boxes brand break brief bring broke brown build built bytes calls cards cares carry cases catch cause cease chain chair chaos chars cheap child chips chose claim class clean clear clock close coded codes comes costs could count court cover crash crazy crisp cross cycle daily dated dates datum deals dealt death deems delay depth digit dirty discs ditto doing doors doubt dozen drawn draws dream drink drive drops drove dying early earth eaten edits eight elect empty ended enemy enjoy enter entry equal error evens event every exact exist extra facts fails faith falls false fancy fatal fault feeds feels fewer field fight filed files fills final finds first fixed fixes flash flied flies float floor flown folks force forms forth found frame fresh fries front fully funds funny gains games given gives glass going goods grand grant graph grave great green grind gross group grown grows guard guess guide habit hands handy hangs happy heads heard hears heart heavy hello helps hence hides hints holds holes hoped hopes horse hotel hours house human hurry ideal ideas image imply index inner input issue items joins joint judge jumps keeps kills kinds knock known knows label lacks lands large lasts later leach leads learn least leave legal level light liked likes limit lines links lists lived lives loads local locks logic looks loose lorry loses lower lucky lunch lying magic major makes march marks marry match maybe means meant media meets merit messy metal might miles minds minor mixed mixes model money month moral mouth moved moves movie music naive named names nasty needs never nicer night noise noisy north noted notes novel occur offer often older omits opens order other ought outer owing owner pages pairs paper parts party patch pause payed peace phase phone picks piece place plain plane plans plant plays plots point posts pound power press price prime print prior prone proof prove pulls putts queue quick quiet quite quits quote radio raise range rapid rates reach react reads ready refer reply right river rooms rough round route rules sadly safer saint sales saved saves scale scene score scrap seeks seems sells sends sense serve seven shall shame shape share sharp sheet shelf shell shift shoot shops short shown shows shuts sides sight signs silly since sites sizes skill sleep small smile solid solve sorry sorts sound south space spare speak speed spell spend spent spite split spoke spots staff stage stand start state stays steal stick still stock stone stood stops store stuck study stuff style sugar suits table taken takes talks tanks tapes tasks taste teach teeth tells tends terms tests thank their there these thing think third those three threw throw tight timed times title today token tooth topic total touch trace track train traps trash treat trees trial trick tried tries truck truly trunk trust truth turns twice tying typed types under unite units until upper upset usage users using usual vague valid value video views visit vital voice votes waits walks walls wants warns waste watch water wears weeks weird wheel where which while white whole whose wider wills woman women words works world worry worse worst worth would write wrong wrote years young yours".split(" "),
        6: "accept access accord across acting action active actual adding adjust admits adopts advice advise affair affect afford afraid agency agreed agrees aiming allows almost alters always amount amused amuses animal annoys annual answer anyone anyway appeal appear argued argues arises around arrive artist asking asleep aspect assume assure attach attack attend author autumn avoids backed basing became become before begins behalf behave behind belong better beyond bigger binary biting bitten boards bodies borrow bother bottle bottom bought branch breach breaks bridge bright brings broken bucket budget buffer builds buried buries button buying called cannot caught caused causes chance change charge choice choose chosen church circle claims clears clever closed closer closes coding coffee column coming common copied copies corner counts county couple course covers create credit crisis crisps cursor cycles damage danger dating debate decade decent decide deduce deemed deeply define degree delete demand depend derive design desire detail detect device devote differ digits dinner direct divide dollar domain double dozens driven driver drives during easier easily eating edited editor effect effort either elects enable ending enough ensure enters entire entity eraser errors escape evened events except excess excuse exists expand expect expert extend extent factor failed fairly fallen family famous faster father faults fewest fields figure filing filled finger finish finite firmly fiscal fishes fitted fixing flight floats flying follow forced forces forget forgot formal format formed former fourth freely french friend future gained garden gather giving global gotten grands grants grinds ground groups growth habits handed handle hanged happen harder hardly having headed header health helped hereby hidden hiding higher highly honest hoping horses ignore images impact impose inches income indeed inform inputs insert inside insist intend invent invite issued issues itself joined killed kindly knocks labels lacked ladies landed larger latest latter layout leaded leader learns leaved leaves length lesser lesson letter levels liable lights likely liking limits linear linked listed listen little living loaded locked logged longer looked losing loudly lowest mainly making manage manner manual marked market master matter medium member memory merely merits method middle minded minute misled missed misses misuse mixing models modern modify moment months mostly mother motion moving myself namely naming nation nature nearby nearer nearly needed nicest nobody normal notice notify noting number object obtain occupy occurs offers office oldest opened oppose option orders origin others output owners packet papers parent partly passed passes paying people period permit person petrol phrase picked pieces placed places planet played please plenty pocket points police policy posted pounds powers prefer pretty prices prints prompt proper proved proves public pulled purely pushed pushes putted quoted quotes raised raises random rarely rather reader really reason recall recent record reduce refers refuse regard region regret reject relate remain remark remind remote remove repair repeat report resort result retain return reveal review rights rubber safely safest safety sample saving saying scheme school scores screen script search season second secret secure seeing seemed select senior serial series served server serves settle severe shared shares should showed signal signed simple simply single skills slight slower slowly smooth social solely solved solves sooner sorted sought sounds source spaces speaks speech spells spends spirit splits spoken spread spring square stable stages stands starts stated states status stayed sticks stones stored stores stream street strict strike string strong struck stupid submit subset subtle sudden suffer suited summer supply surely survey switch symbol syntax system tables taking talked target taught tested thanks theory things thinks though threat thrown throws ticket timing titles topics toward tracks trains travel treats trusts trying turned twelve twenty typing unable unique unless unlike update upsets useful values varied varies vastly vector virtue vision volume waited walked wanted warned wasted wastes weapon weight wheels whilst widely widest willed window winter wished wishes within wonder wooden worded worked worker worthy writer writes yellow".split(" "),
        7: "ability absence accepts accords account achieve acquire actions address adopted advance advised advises affairs affects against allowed already altered amongst amounts amusing ancient annoyed another answers anybody apology appears applied applies approve arguing arrange arrived arrives article aspects assumed assumes assured assures attempt attends attract authors average avoided awkward backing balance battery bearing because becomes believe belongs benefit besides betting between bidding biggest binding biology bizarre borrows bothers bracket briefly brother brought burying calling capable capital captain careful carried carries catches causing central century certain chances changed changes channel chapter charged charges cheaper checked chooses circuit citizen claimed clarify classes cleared clearer clearly closely closest closing collect college combine command comment company compare complex compose compute concept concern confirm confuse connect consist contact contain content context control convert copying corners correct corrupt costing council counted counter country courses covered crashed crashes created creates culture cumming curious current cutting damaged damages dealing decided decides declare deeming default defined defines degrees deleted deletes deliver demands depends derived derives designs desired desires despite destroy details detects develop devices devoted devotes digital directs discuss dislike display distant disturb divided divides drastic drawing drivers driving dropped dubious earlier easiest economy editing edition editors effects efforts elected element enables ensured ensures entered entitle entries equally evening exactly examine example exclude execute existed expands expects expense experts explain express extends extract extreme factors failing failure falling farther fashion fastest feature federal feeding feeling figures filling finally finding fingers firstly fitting flashed flashes floated follows forcing foreign forever forgets forming fortune forward freedom friends further gaining garbage general genuine getting granted graphic greater greatly grosses grounds growing guessed guesses handing handled handles hanging happens happily hardest harmful heading healthy hearing heavily helpful helping herself highest himself history hitting holding holiday however hundred husband ignored ignores illegal imagine implied implies imposed imposes improve incline include informs initial inserts insists install instant instead integer intends invalid invents invited invites involve isolate issuing joining justify keeping killing knocked knowing lacking landing largely largest leading leaving lecture legally lessons letters letting library limited linking listing loading locking logging logical longest looking machine managed manager manages manuals marking massive matches matters maximum meaning measure medical mediums meeting members mention message methods million minding minimal minimum minutes mislead missing mistake mistook monitor morning natural naughty nearest needing neither nervous network nothing noticed notices nowhere numbers numbest objects obscure observe obtains obvious offered officer offices omitted opening operate opinion opposed opposes options ordered outside overall package painful partial parties passing patient pattern perfect perform perhaps permits persons phrases picking picture placing planned plastic playing pleased pleases pointed popular posting precise prefers prepare present pressed presses presume prevent primary printed printer private problem process produce product project promise propose protect protest provide proving publish pulling purpose pushing putting qualify quality quarter quicker quickly quietly quoting raising rapidly reached reaches readers readily reading reality reasons receive records recover reduced reduces reflect refused refuses regards regular rejects related relates release remains remarks reminds removal removed removes repeats replace replied replies reports request require reserve respect respond restart restore results returns reveals reverse rewrite ridding roughly routine rubbish running satisfy schools science scratch screens seconds section seeking seeming selects selling seminar sending serious service serving session setting settled settles several sharing shopped shorter shortly showing signals signing similar simpler sitting slowest smaller society solving somehow someone soonest sorting sounded sources speaker special specify spotted spreads started stating station staying stopped storage storing strange strikes strings student studied studies subject submits succeed success suffers suffice suggest suiting summary support suppose surface survive suspect suspend symbols systems talking teacher teaches tedious telling testing thereby thought through tickets tonight totally touched touches towards traffic trained trapped treated trivial trouble trusted turning typical unaware unclear unhappy uniform unknown unusual updated updates upwards useless usually utility utterly vaguely variety various varying version visible waiting walking wanting warning wasting watched watches wearing weather weekend welcome western whereas whereby whether whoever willing windows winning wishing without wonders wording workers working worried worries writing written".split(" "),
        8: "absolute academic accepted accident accorded accounts accuracy accurate achieved achieves acquired acquires activity actually addition adequate admitted adopting advanced advances advising affected agreeing allowing altering although analogue analysis announce annoying answered anyplace anything anywhere apparent appeared applying approach approval approved approves argument arranged arranges arriving articles assembly assuming assuring attached attaches attempts attended attitude audience avoiding becoming believed believes benefits borrowed bothered brackets branches breaking bringing building bulletin business campaign capacity carrying cassette catching category chairman changing channels charging cheapest checking chemical children choosing claiming clearest clearing collapse collects colleges combined combines commands comments commonly compared compares compiler complain complete composed composes computed computer computes concerns concrete confirms confused confuses connects consider consists constant contains contents continue contract contrary contrast controls convince corrects corrupts counting covering crashing creating creation creature critical customer damaging database deciding decision declared declares decrease dedicate defining definite deleting delivers delivery depended deriving describe designed desiring destroys detailed detected develops devoting directed directly director disagree disaster discount discover displays distance distinct district disturbs dividing division document doubtful dropping earliest economic electing election electric elements elevator emphasis employee engineer enormous ensuring entering entirely entitled entitles entrance estimate evenings everyone evidence examined examines examples exchange excluded excludes executed executes exercise existing expanded expected explains explicit extended external facility familiar farthest feasible features feedback finished finishes flashing flexible floating followed fraction frequent friendly function furthest gasoline generate governor graduate granting graphics grateful greatest grinding guessing handling happened hardware harmless holidays horrible hospital hundreds identify identity ignoring implying imposing improved improves incident inclined inclines included includes increase indicate industry inferior infinite informed initials innocent inputted inserted insisted installs instance integers integral intended interact interest internal interval invented inviting involved involves irritate isolated isolates keyboard knocking language learning lectures lifetime likewise limiting location machines magnetic maintain majority managing marriage material meanings measured measures mechanic meetings mentions messages midnight military millions minority misleads mistaken mistakes modified modifies mornings movement multiple national negative networks nonsense normally noticing nowadays numerous objected observed observes obtained occasion occupied occupies occurred offering official omitting operated operates operator opinions opposing opposite optional ordering ordinary original packages parallel patterns peculiar performs personal persuade physical pictures planning pleasant pleasing pointing policies position positive possible possibly powerful prepared prepares presence presents preserve pressing pressure prevents previous printers printing printout probably problems produced produces products progress projects promised promises promptly properly property proposal proposed proposes prospect protects provided provides publicly puncture purchase purposes quantity question quickest quitting randomly reaching reaction readable received receives recently recorded recovers reducing referred reflects refusing regarded register rejected relating relation relative released releases relevant reliable religion remained remember reminded remotely removing repeated replaced replaces replying reported requests required requires research reserved reserves resident resource respects response restored restores restrict resulted returned revealed sciences searched searches secondly sections security selected sensible sensibly sentence separate sequence services sessions settling severely shopping shortage shortest shutting simplest slightly smallest software solution somebody sometime somewhat sounding southern speakers speaking specific spelling spending spotting standard standing starting stations sticking stopping straight strategy strength strictly striking strongly students studying subjects suddenly suffered suggests suitable suitably superior supplied supplies supports supposed supposes surprise survived survives suspects suspends switched switches teaching tendency terminal terribly thinking thoughts thousand throwing together tomorrow touching training transfer trapping treating trusting ultimate unlikely unwanted updating vacation validity valuable variable versions watching welcomed welcomes whatever whenever wherever withdraw wondered worrying yourself".split(" "),
        9: "abilities accepting according achieving acquiring addressed addresses admitting advancing advantage advertise affecting afternoon agreement algorithm alternate ambiguous anonymous answering apologies appearing approving arbitrary arguments arranging assembler assistant associate attaching attempted attending attention authority automatic available backwards basically beautiful beginning believing borrowing bothering broadcast buildings calculate candidate cardboard carefully certainly character collected combining commented committee community comparing complains complaint completed completes component composing computers computing concerned condition confident confirmed confusing confusion connected considers construct contained continued continues convinced convinces corrected correctly corrupted criticism currently dangerous decisions declaring dedicated dedicates delivered depending described describes designing desirable desperate destroyed detailing detecting determine developed different difficult directing direction directory disappear discovers discussed discusses displayed disturbed documents education effective efficient elsewhere embarrass emergency encounter encourage engineers entitling equipment essential establish everybody examining excellent exception excessive excluding exclusive executing existence expanding expansion expecting expensive explained expressed expresses extending extension extensive extremely financial finishing following forgotten functions generally generated generates gradually guarantee happening hopefully identical immediate implement important improving inability inclining including incorrect increased increases indicates influence informing initially inputting inserting insisting installed instantly insurance intending intention interests interface interpret intervals introduce inventing invisible involving irritated irritates isolating justified justifies knowledge languages libraries literally locations magnitude maintains materials measuring mechanics mechanism mentioned mistaking modifying movements naturally necessary necessity numerical objecting objection observing obtaining obviously occasions occupying occurring operating operation operators otherwise ourselves paragraph partially perfectly performed permanent permitted persuaded persuades pointless political positions potential practical precisely preferred preparing presented president prevented primitive principle procedure processed processes processor producing promising proposing protected providing publicity published publishes qualified qualifies questions receiving reception recommend recording recovered reduction redundant reference referring reflected regarding registers regularly rejecting releasing relevance religious reluctant remaining remembers reminding repeating replacing reporting represent reproduce requested requiring reserving resourced resources responses restoring restricts resulting returning revealing satisfied satisfies searching secondary secretary selecting selection sensitive sentences sequences seriously similarly sincerely situation solutions someplace something sometimes somewhere specially specified specifies splitting spreading standards statement statistic structure submitted suffering suggested supplying supported supposing surprised surprises surviving suspected suspended suspicion switching technical technique telephone temporary terminals therefore thousands transfers translate transport treatment uncertain universal unlimited upsetting vacations variables variation virtually welcoming wonderful wondering yesterday".split(" "),
        10: "absolutely acceptable accessible accidental activities additional addressing admittedly advantages advertised advertises algorithms altogether apparently appearance appreciate arithmetic artificial associated associates assumption atmosphere attempting attractive automobile background beforehand broadcasts categories characters collecting collection commenting commercial commission commitment comparable comparison compatible complained complaints completely completing complexity complicate components compromise compulsory concerning conclusion conditions conference confirming connecting connection considered consistent constraint containing continuing continuous contribute controlled convenient convention convincing correcting correction corrupting dedicating definitely definition definitive deliberate delivering democratic department describing destroying determined determines developing dictionary difference difficulty directions disappears discipline discourage discovered discussing discussion displaying distinctly distribute disturbing documented electronic encounters encouraged encourages engineered equivalent especially eventually everything everywhere exceptions experience experiment explaining expressing expression facilities forgetting frequently generating generation government guaranteed guarantees historical implements importance impossible impression inadequate incomplete increasing indication individual industrial inevitably installing interested interprets introduced introduces invariably invitation irrelevant irritating justifying laboratory literature maintained meaningful membership mentioning misleading mysterious objections occasional operations opposition originally particular performing permission permitting personally persuading phenomenon philosophy population postmaster preferable preferably preference preferring presenting presumably preventing previously principles processing processors production programmer properties proportion protecting protection publishing qualifying quantities reasonable reasonably recommends recovering references reflecting reflection regardless registered regulation relatively remembered repeatedly represents requesting resolution resourcing restricted ridiculous satisfying scientific separately situations specifying statements statistics structures submitting subsequent substitute successful sufficient suggesting suggestion supervisor supporting supposedly surprising suspecting suspending techniques technology television themselves thoroughly throughout translated translates ultimately underneath understand understood university unpleasant unsuitable whatsoever widespread worthwhile".split(" "),
        11: "accordingly advertising alternative application appreciated appreciates appropriate arrangement associating association authorities calculation circulation combination communicate competition complaining complicated complicates composition connections consequence considering consistency constraints consumption continually controlling conventions definitions demonstrate description determining development differences differently disappeared discouraged discourages discovering discussions distinction distinguish distributed distributes documenting educational effectively electronics embarrassed embarrasses encountered encouraging engineering environment essentially established establishes experienced experiences experiments explanation forthcoming fortunately fundamental imagination immediately implemented implication importantly improvement independent individuals information institution instruction intelligent interesting interpreted introducing investigate maintaining mathematics meaningless necessarily observation opportunity performance permanently possibility potentially practically preparation programmers publication punctuation recognition recommended registering regulations remembering replacement represented requirement responsible restricting significant statistical substantial suggestions temperature temporarily terminology theoretical traditional transferred translating translation understands unfortunate unnecessary".split(" "),
        12: "accidentally alternatives announcement applications appreciating arrangements broadcasting calculations circumstance combinations complicating consequences consequently considerable considerably continuation continuously contribution conventional conversation deliberately descriptions difficulties disadvantage disappearing discouraging distributing distribution embarrassing encountering establishing experiencing experimental guaranteeing implementing implications improvements incidentally incompatible inconsistent individually institutions instructions intelligence interpreting intervention introduction manipulation mathematical nevertheless occasionally particularly professional recommending relationship representing requirements respectively significance simultaneous sophisticate specifically successfully sufficiently transferring unacceptable universities unreasonable".split(" ")
    }
};
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !1,
                EndGame: !1,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "cn"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var MobileAdInGamePreroll = {
};
var MobileAdInGameHeader = {

};
var MobileAdInGameFooter = {

};
var MobileAdInGameEnd = {

};
(function (c, d) {
    function e(c, v, q) {
        if (q === d && 1 === c.nodeType)
            if (q = "data-" + v.replace(tc, "-$1").toLowerCase(), q = c.getAttribute(q), "string" == typeof q) {
                try {
                    q = "true" === q ? !0 : "false" === q ? !1 : "null" === q ? null : +q + "" === q ? +q : uc.test(q) ? j.parseJSON(q) : q
                } catch (e) { }
                j.data(c, v, q)
            } else q = d;
        return q
    }

    function f(c) {
        for (var d in c)
            if (!("data" === d && j.isEmptyObject(c[d])) && "toJSON" !== d) return !1;
        return !0
    }

    function m() {
        return !1
    }

    function p() {
        return !0
    }

    function u(c) {
        return !c || !c.parentNode || 11 === c.parentNode.nodeType
    }

    function t(c, d) {
        do c = c[d]; while (c && 1 !== c.nodeType);
        return c
    }

    function l(c, d, q) {
        d = d || 0;
        if (j.isFunction(d)) return j.grep(c, function (c, z) {
            return !!d.call(c, z, c) === q
        });
        if (d.nodeType) return j.grep(c, function (c) {
            return c === d === q
        });
        if ("string" == typeof d) {
            var e = j.grep(c, function (c) {
                return 1 === c.nodeType
            });
            if (wc.test(d)) return j.filter(d, e, !q);
            d = j.filter(d, e)
        }
        return j.grep(c, function (c) {
            return 0 <= j.inArray(c, d) === q
        })
    }

    function n(c) {
        var d = vb.split("|");
        c = c.createDocumentFragment();
        if (c.createElement)
            for (; d.length;) c.createElement(d.pop());
        return c
    }

    function s(c, d) {
        if (1 === d.nodeType && j.hasData(c)) {
            var q, e, l;
            e = j._data(c);
            var E = j._data(d, e),
                B = e.events;
            if (B)
                for (q in delete E.handle, E.events = {}, B) {
                    e = 0;
                    for (l = B[q].length; e < l; e++) j.event.add(d, q, B[q][e])
                }
            E.data && (E.data = j.extend({}, E.data))
        }
    }

    function x(c, d) {
        var q;
        1 === d.nodeType && (d.clearAttributes && d.clearAttributes(), d.mergeAttributes && d.mergeAttributes(c), q = d.nodeName.toLowerCase(), "object" === q ? (d.parentNode && (d.outerHTML = c.outerHTML), j.support.html5Clone && c.innerHTML && !j.trim(d.innerHTML) && (d.innerHTML = c.innerHTML)) : "input" === q && wb.test(c.type) ? (d.defaultChecked = d.checked = c.checked, d.value !== c.value && (d.value = c.value)) : "option" === q ? d.selected = c.defaultSelected : "input" === q || "textarea" === q ? d.defaultValue = c.defaultValue : "script" === q && d.text !== c.text && (d.text = c.text), d.removeAttribute(j.expando))
    }

    function y(c) {
        return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName("*") : "undefined" != typeof c.querySelectorAll ? c.querySelectorAll("*") : []
    }

    function A(c) {
        wb.test(c.type) && (c.defaultChecked = c.checked)
    }

    function D(c, d) {
        if (d in c) return d;
        for (var q = d.charAt(0).toUpperCase() + d.slice(1), j = d, e = xb.length; e--;)
            if (d = xb[e] + q, d in c) return d;
        return j
    }

    function G(c, d) {
        return c = d || c, "none" === j.css(c, "display") || !j.contains(c.ownerDocument, c)
    }

    function J(c, d) {
        for (var q, e, l = [], E = 0, B = c.length; E < B; E++) q = c[E], q.style && (l[E] = j._data(q, "olddisplay"), d ? (!l[E] && "none" === q.style.display && (q.style.display = ""), "" === q.style.display && G(q) && (l[E] = j._data(q, "olddisplay", fa(q.nodeName)))) : (e = Q(q, "display"), !l[E] && "none" !== e && j._data(q, "olddisplay", e)));
        for (E = 0; E < B; E++)
            if (q = c[E], q.style && (!d || "none" === q.style.display || "" === q.style.display)) q.style.display = d ? l[E] || "" : "none";
        return c
    }

    function F(c, d, q) {
        return (c = xc.exec(d)) ? Math.max(0, c[1] - (q || 0)) + (c[2] || "px") : d
    }

    function H(c, d, q, e) {
        d = q === (e ? "border" : "content") ? 4 : "width" === d ? 1 : 0;
        for (var l = 0; 4 > d; d += 2) "margin" === q && (l += j.css(c, q + ga[d], !0)), e ? ("content" === q && (l -= parseFloat(Q(c, "padding" + ga[d])) || 0), "margin" !== q && (l -= parseFloat(Q(c, "border" + ga[d] + "Width")) || 0)) : (l += parseFloat(Q(c, "padding" + ga[d])) || 0, "padding" !== q && (l += parseFloat(Q(c, "border" + ga[d] + "Width")) || 0));
        return l
    }

    function ba(c, d, q) {
        var e = "width" === d ? c.offsetWidth : c.offsetHeight,
            l = !0,
            E = j.support.boxSizing && "border-box" === j.css(c, "boxSizing");
        if (0 >= e || null == e) {
            e = Q(c, d);
            if (0 > e || null == e) e = c.style[d];
            if (ya.test(e)) return e;
            l = E && (j.support.boxSizingReliable || e === c.style[d]);
            e = parseFloat(e) || 0
        }
        return e + H(c, d, q || (E ? "border" : "content"), l) + "px"
    }

    function fa(c) {
        if (Xa[c]) return Xa[c];
        var d = j("<" + c + ">").appendTo(C.body),
            q = d.css("display");
        d.remove();
        if ("none" === q || "" === q) {
            na = C.body.appendChild(na || j.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!oa || !na.createElement) oa = (na.contentWindow || na.contentDocument).document, oa.write("<!doctype html><html><body>"), oa.close();
            d = oa.body.appendChild(oa.createElement(c));
            q = Q(d, "display");
            C.body.removeChild(na)
        }
        return Xa[c] = q, q
    }

    function K(c, d, q, e) {
        var l;
        if (j.isArray(d)) j.each(d, function (d, v) {
            q || yc.test(c) ? e(c, v) : K(c + "[" + ("object" == typeof v ? d : "") + "]", v, q, e)
        });
        else if (!q && "object" === j.type(d))
            for (l in d) K(c + "[" + l + "]", d[l], q, e);
        else e(c, d)
    }

    function yb(c) {
        return function (d, q) {
            "string" != typeof d && (q = d, d = "*");
            var e, l, E = d.toLowerCase().split(ha),
                B = 0,
                f = E.length;
            if (j.isFunction(q))
                for (; B < f; B++) e = E[B], (l = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = c[e] = c[e] || [], e[l ? "unshift" : "push"](q)
        }
    }

    function za(c, v, q, j, e, l) {
        e = e || v.dataTypes[0];
        l = l || {};
        l[e] = !0;
        var B;
        e = c[e];
        for (var f = 0, n = e ? e.length : 0, m = c === Ya; f < n && (m || !B); f++) B = e[f](v, q, j), "string" == typeof B && (!m || l[B] ? B = d : (v.dataTypes.unshift(B), B = za(c, v, q, j, B, l)));
        return (m || !B) && !l["*"] && (B = za(c, v, q, j, "*", l)), B
    }

    function zb(c, v) {
        var q, e, l = j.ajaxSettings.flatOptions || {};
        for (q in v) v[q] !== d && ((l[q] ? c : e || (e = {}))[q] = v[q]);
        e && j.extend(!0, c, e)
    }

    function Ab() {
        try {
            return new c.XMLHttpRequest
        } catch (z) { }
    }

    function Bb() {
        return setTimeout(function () {
            Aa = d
        }, 0), Aa = j.now()
    }

    function Cb(c, d, q) {
        var e, l = 0,
            E = Ba.length,
            B = j.Deferred().always(function () {
                delete f.elem
            }),
            f = function () {
                for (var d = Aa || Bb(), d = Math.max(0, n.startTime + n.duration - d), v = 1 - (d / n.duration || 0), q = 0, j = n.tweens.length; q < j; q++) n.tweens[q].run(v);
                return B.notifyWith(c, [n, v, d]), 1 > v && j ? d : (B.resolveWith(c, [n]), !1)
            },
            n = B.promise({
                elem: c,
                props: j.extend({}, d),
                opts: j.extend(!0, {
                    specialEasing: {}
                }, q),
                originalProperties: d,
                originalOptions: q,
                startTime: Aa || Bb(),
                duration: q.duration,
                tweens: [],
                createTween: function (d, v) {
                    var q = j.Tween(c, n.opts, d, v, n.opts.specialEasing[d] || n.opts.easing);
                    return n.tweens.push(q), q
                },
                stop: function (d) {
                    for (var v = 0, q = d ? n.tweens.length : 0; v < q; v++) n.tweens[v].run(1);
                    return d ? B.resolveWith(c, [n, d]) : B.rejectWith(c, [n, d]), this
                }
            });
        d = n.props;
        q = n.opts.specialEasing;
        var m, s, p, x;
        for (e in d)
            if (m = j.camelCase(e), s = q[m], p = d[e], j.isArray(p) && (s = p[1], p = d[e] = p[0]), e !== m && (d[m] = p, delete d[e]), (x = j.cssHooks[m]) && "expand" in x)
                for (e in p = x.expand(p), delete d[m], p) e in d || (d[e] = p[e], q[e] = s);
            else q[m] = s;
        for (; l < E; l++)
            if (e = Ba[l].call(n, c, d, n.opts)) return e;
        var y = n;
        j.each(d, function (c, z) {
            for (var d = (ta[c] || []).concat(ta["*"]), v = 0, q = d.length; v < q && !d[v].call(y, c, z); v++);
        });
        return j.isFunction(n.opts.start) && n.opts.start.call(c, n), j.fx.timer(j.extend(f, {
            anim: n,
            queue: n.opts.queue,
            elem: c
        })), n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always)
    }

    function R(c, d, q, j, e) {
        return new R.prototype.init(c, d, q, j, e)
    }

    function Ca(c, d) {
        var q, j = {
            height: c
        },
            e = 0;
        for (d = d ? 1 : 0; 4 > e; e += 2 - d) q = ga[e], j["margin" + q] = j["padding" + q] = c;
        return d && (j.opacity = j.width = c), j
    }

    function Db(c) {
        return j.isWindow(c) ? c : 9 === c.nodeType ? c.defaultView || c.parentWindow : !1
    }
    var Eb, Da, C = c.document,
        Ac = c.location,
        Bc = c.navigator,
        Cc = c.jQuery,
        Dc = c.$,
        Fb = Array.prototype.push,
        aa = Array.prototype.slice,
        Gb = Array.prototype.indexOf,
        Ec = Object.prototype.toString,
        Za = Object.prototype.hasOwnProperty,
        $a = String.prototype.trim,
        j = function (c, d) {
            return new j.fn.init(c, d, Eb)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Fc = /\S/,
        ha = /\s+/,
        Gc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Hc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Hb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ic = /^[\],:{}\s]*$/,
        Jc = /(?:^|:|,)(?:\s*\[)+/g,
        Kc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Lc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Mc = /^-ms-/,
        Nc = /-([\da-z])/gi,
        Oc = function (c, d) {
            return (d + "").toUpperCase()
        },
        Fa = function () {
            C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Fa, !1), j.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Fa), j.ready())
        },
        Ib = {};
    j.fn = j.prototype = {
        constructor: j,
        init: function (c, v, q) {
            var e, l;
            if (!c) return this;
            if (c.nodeType) return this.context = this[0] = c, this.length = 1, this;
            if ("string" == typeof c) {
                "<" === c.charAt(0) && ">" === c.charAt(c.length - 1) && 3 <= c.length ? e = [null, c, null] : e = Hc.exec(c);
                if (e && (e[1] || !v)) {
                    if (e[1]) return v = v instanceof j ? v[0] : v, l = v && v.nodeType ? v.ownerDocument || v : C, c = j.parseHTML(e[1], l, !0), Hb.test(e[1]) && j.isPlainObject(v) && this.attr.call(c, v, !0), j.merge(this, c);
                    if ((v = C.getElementById(e[2])) && v.parentNode) {
                        if (v.id !== e[2]) return q.find(c);
                        this.length = 1;
                        this[0] = v
                    }
                    return this.context = C, this.selector = c, this
                }
                return !v || v.jquery ? (v || q).find(c) : this.constructor(v).find(c)
            }
            return j.isFunction(c) ? q.ready(c) : (c.selector !== d && (this.selector = c.selector, this.context = c.context), j.makeArray(c, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return aa.call(this)
        },
        get: function (c) {
            return null == c ? this.toArray() : 0 > c ? this[this.length + c] : this[c]
        },
        pushStack: function (c, d, q) {
            c = j.merge(this.constructor(), c);
            return c.prevObject = this, c.context = this.context, "find" === d ? c.selector = this.selector + (this.selector ? " " : "") + q : d && (c.selector = this.selector + "." + d + "(" + q + ")"), c
        },
        each: function (c, d) {
            return j.each(this, c, d)
        },
        ready: function (c) {
            return j.ready.promise().done(c), this
        },
        eq: function (c) {
            return c = +c, -1 === c ? this.slice(c) : this.slice(c, c + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(aa.apply(this, arguments), "slice", aa.call(arguments).join(","))
        },
        map: function (c) {
            return this.pushStack(j.map(this, function (d, q) {
                return c.call(d, q, d)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Fb,
        sort: [].sort,
        splice: [].splice
    };
    j.fn.init.prototype = j.fn;
    j.extend = j.fn.extend = function () {
        var c, v, q, e, l, n, B = arguments[0] || {},
            f = 1,
            m = arguments.length,
            s = !1;
        "boolean" == typeof B && (s = B, B = arguments[1] || {}, f = 2);
        "object" != typeof B && !j.isFunction(B) && (B = {});
        for (m === f && (B = this, --f); f < m; f++)
            if (null != (c = arguments[f]))
                for (v in c) q = B[v], e = c[v], B !== e && (s && e && (j.isPlainObject(e) || (l = j.isArray(e))) ? (l ? (l = !1, n = q && j.isArray(q) ? q : []) : n = q && j.isPlainObject(q) ? q : {}, B[v] = j.extend(s, n, e)) : e !== d && (B[v] = e));
        return B
    };
    j.extend({
        noConflict: function (z) {
            return c.$ === j && (c.$ = Dc), z && c.jQuery === j && (c.jQuery = Cc), j
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (c) {
            c ? j.readyWait++ : j.ready(!0)
        },
        ready: function (c) {
            if (!(!0 === c ? --j.readyWait : j.isReady)) {
                if (!C.body) return setTimeout(j.ready, 1);
                j.isReady = !0;
                !0 !== c && 0 < --j.readyWait || (Da.resolveWith(C, [j]), j.fn.trigger && j(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function (c) {
            return "function" === j.type(c)
        },
        isArray: Array.isArray || function (c) {
            return "array" === j.type(c)
        },
        isWindow: function (c) {
            return null != c && c == c.window
        },
        isNumeric: function (c) {
            return !isNaN(parseFloat(c)) && isFinite(c)
        },
        type: function (c) {
            return null == c ? String(c) : Ib[Ec.call(c)] || "object"
        },
        isPlainObject: function (c) {
            if (!c || "object" !== j.type(c) || c.nodeType || j.isWindow(c)) return !1;
            try {
                if (c.constructor && !Za.call(c, "constructor") && !Za.call(c.constructor.prototype, "isPrototypeOf")) return !1
            } catch (v) {
                return !1
            }
            for (var q in c);
            return q === d || Za.call(c, q)
        },
        isEmptyObject: function (c) {
            for (var d in c) return !1;
            return !0
        },
        error: function (c) {
            throw Error(c);
        },
        parseHTML: function (c, d, q) {
            var e;
            return !c || "string" != typeof c ? null : ("boolean" == typeof d && (q = d, d = 0), d = d || C, (e = Hb.exec(c)) ? [d.createElement(e[1])] : (e = j.buildFragment([c], d, q ? null : []), j.merge([], (e.cacheable ? j.clone(e.fragment) : e.fragment).childNodes)))
        },
        parseJSON: function (z) {
            if (!z || "string" != typeof z) return null;
            z = j.trim(z);
            if (c.JSON && c.JSON.parse) return c.JSON.parse(z);
            if (Ic.test(z.replace(Kc, "@").replace(Lc, "]").replace(Jc, ""))) return (new Function("return " + z))();
            j.error("Invalid JSON: " + z)
        },
        parseXML: function (z) {
            var v, q;
            if (!z || "string" != typeof z) return null;
            try {
                c.DOMParser ? (q = new DOMParser, v = q.parseFromString(z, "text/xml")) : (v = new ActiveXObject("Microsoft.XMLDOM"), v.async = "false", v.loadXML(z))
            } catch (e) {
                v = d
            }
            return (!v || !v.documentElement || v.getElementsByTagName("parsererror").length) && j.error("Invalid XML: " + z), v
        },
        noop: function () { },
        globalEval: function (z) {
            z && Fc.test(z) && (c.execScript || function (z) {
                c.eval.call(c, z)
            })(z)
        },
        camelCase: function (c) {
            return c.replace(Mc, "ms-").replace(Nc, Oc)
        },
        nodeName: function (c, d) {
            return c.nodeName && c.nodeName.toLowerCase() === d.toLowerCase()
        },
        each: function (c, v, q) {
            var e, l = 0,
                n = c.length,
                B = n === d || j.isFunction(c);
            if (q)
                if (B)
                    for (e in c) {
                        if (!1 === v.apply(c[e], q)) break
                    } else
                    for (; l < n && !1 !== v.apply(c[l++], q););
            else if (B)
                for (e in c) {
                    if (!1 === v.call(c[e], e, c[e])) break
                } else
                for (; l < n && !1 !== v.call(c[l], l, c[l++]););
            return c
        },
        trim: $a && !$a.call("\ufeff\u00a0") ? function (c) {
            return null == c ? "" : $a.call(c)
        } : function (c) {
            return null == c ? "" : (c + "").replace(Gc, "")
        },
        makeArray: function (c, d) {
            var q, e = d || [];
            return null != c && (q = j.type(c), null == c.length || "string" === q || "function" === q || "regexp" === q || j.isWindow(c) ? Fb.call(e, c) : j.merge(e, c)), e
        },
        inArray: function (c, d, q) {
            var e;
            if (d) {
                if (Gb) return Gb.call(d, c, q);
                e = d.length;
                for (q = q ? 0 > q ? Math.max(0, e + q) : q : 0; q < e; q++)
                    if (q in d && d[q] === c) return q
            }
            return -1
        },
        merge: function (c, v) {
            var q = v.length,
                e = c.length,
                j = 0;
            if ("number" == typeof q)
                for (; j < q; j++) c[e++] = v[j];
            else
                for (; v[j] !== d;) c[e++] = v[j++];
            return c.length = e, c
        },
        grep: function (c, d, q) {
            var e, j = [],
                l = 0,
                B = c.length;
            for (q = !!q; l < B; l++) e = !!d(c[l], l), q !== e && j.push(c[l]);
            return j
        },
        map: function (c, v, q) {
            var e, l, n = [],
                B = 0,
                f = c.length;
            if (c instanceof j || f !== d && "number" == typeof f && (0 < f && c[0] && c[f - 1] || 0 === f || j.isArray(c)))
                for (; B < f; B++) e = v(c[B], B, q), null != e && (n[n.length] = e);
            else
                for (l in c) e = v(c[l], l, q), null != e && (n[n.length] = e);
            return n.concat.apply([], n)
        },
        guid: 1,
        proxy: function (c, v) {
            var q, e, l;
            return "string" == typeof v && (q = c[v], v = c, c = q), j.isFunction(c) ? (e = aa.call(arguments, 2), l = function () {
                return c.apply(v, e.concat(aa.call(arguments)))
            }, l.guid = c.guid = c.guid || j.guid++, l) : d
        },
        access: function (c, v, q, e, l, n, B) {
            var f, m = null == q,
                s = 0,
                p = c.length;
            if (q && "object" == typeof q) {
                for (s in q) j.access(c, v, s, q[s], 1, n, e);
                l = 1
            } else if (e !== d) {
                f = B === d && j.isFunction(e);
                m && (f ? (f = v, v = function (c, z, d) {
                    return f.call(j(c), d)
                }) : (v.call(c, e), v = null));
                if (v)
                    for (; s < p; s++) v(c[s], q, f ? e.call(c[s], s, v(c[s], q)) : e, B);
                l = 1
            }
            return l ? c : m ? v.call(c) : p ? v(c[0], q) : n
        },
        now: function () {
            return (new Date).getTime()
        }
    });
    j.ready.promise = function (z) {
        if (!Da)
            if (Da = j.Deferred(), "complete" === C.readyState) setTimeout(j.ready, 1);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded", Fa, !1), c.addEventListener("load", j.ready, !1);
            else {
                C.attachEvent("onreadystatechange", Fa);
                c.attachEvent("onload", j.ready);
                var d = !1;
                try {
                    d = null == c.frameElement && C.documentElement
                } catch (q) { }
                d && d.doScroll && function vc() {
                    if (!j.isReady) {
                        try {
                            d.doScroll("left")
                        } catch (c) {
                            return setTimeout(vc, 50)
                        }
                        j.ready()
                    }
                }()
            }
        return Da.promise(z)
    };
    j.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (c, d) {
        Ib["[object " + d + "]"] = d.toLowerCase()
    });
    Eb = j(C);
    var Jb = {};
    j.Callbacks = function (c) {
        var v;
        if ("string" == typeof c) {
            if (!(v = Jb[c])) {
                v = c;
                var q = Jb[v] = {};
                v = (j.each(v.split(ha), function (c, z) {
                    q[z] = !0
                }), q)
            }
        } else v = j.extend({}, c);
        c = v;
        var e, l, n, B, f, m, s = [],
            p = !c.once && [],
            x = function (d) {
                e = c.memory && d;
                l = !0;
                m = B || 0;
                B = 0;
                f = s.length;
                for (n = !0; s && m < f; m++)
                    if (!1 === s[m].apply(d[0], d[1]) && c.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1;
                s && (p ? p.length && x(p.shift()) : e ? s = [] : y.disable())
            },
            y = {
                add: function () {
                    if (s) {
                        var d = s.length;
                        (function zc(d) {
                            j.each(d, function (d, v) {
                                var q = j.type(v);
                                "function" === q && (!c.unique || !y.has(v)) ? s.push(v) : v && v.length && "string" !== q && zc(v)
                            })
                        })(arguments);
                        n ? f = s.length : e && (B = d, x(e))
                    }
                    return this
                },
                remove: function () {
                    return s && j.each(arguments, function (c, d) {
                        for (var z; - 1 < (z = j.inArray(d, s, z));) s.splice(z, 1), n && (z <= f && f--, z <= m && m--)
                    }), this
                },
                has: function (c) {
                    return -1 < j.inArray(c, s)
                },
                empty: function () {
                    return s = [], this
                },
                disable: function () {
                    return s = p = e = d, this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return p = d, e || y.disable(), this
                },
                locked: function () {
                    return !p
                },
                fireWith: function (c, z) {
                    return z = z || [], z = [c, z.slice ? z.slice() : z], s && (!l || p) && (n ? p.push(z) : x(z)), this
                },
                fire: function () {
                    return y.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!l
                }
            };
        return y
    };
    j.extend({
        Deferred: function (c) {
            var d = [
                ["resolve", "done", j.Callbacks("once memory"), "resolved"],
                ["reject", "fail", j.Callbacks("once memory"), "rejected"],
                ["notify", "progress", j.Callbacks("memory")]
            ],
                q = "pending",
                e = {
                    state: function () {
                        return q
                    },
                    always: function () {
                        return l.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var c = arguments;
                        return j.Deferred(function (z) {
                            j.each(d, function (d, v) {
                                var q = v[0],
                                    e = c[d];
                                l[v[1]](j.isFunction(e) ? function () {
                                    var c = e.apply(this, arguments);
                                    c && j.isFunction(c.promise) ? c.promise().done(z.resolve).fail(z.reject).progress(z.notify) : z[q + "With"](this === l ? z : this, [c])
                                } : z[q])
                            });
                            c = null
                        }).promise()
                    },
                    promise: function (c) {
                        return null != c ? j.extend(c, e) : e
                    }
                },
                l = {};
            return e.pipe = e.then, j.each(d, function (c, z) {
                var j = z[2],
                    n = z[3];
                e[z[1]] = j.add;
                n && j.add(function () {
                    q = n
                }, d[c ^ 1][2].disable, d[2][2].lock);
                l[z[0]] = j.fire;
                l[z[0] + "With"] = j.fireWith
            }), e.promise(l), c && c.call(l, l), l
        },
        when: function (c) {
            var d = 0,
                q = aa.call(arguments),
                e = q.length,
                l = 1 !== e || c && j.isFunction(c.promise) ? e : 0,
                n = 1 === l ? c : j.Deferred(),
                B = function (c, z, d) {
                    return function (v) {
                        z[c] = this;
                        d[c] = 1 < arguments.length ? aa.call(arguments) : v;
                        d === f ? n.notifyWith(z, d) : --l || n.resolveWith(z, d)
                    }
                },
                f, m, s;
            if (1 < e) {
                f = Array(e);
                m = Array(e);
                for (s = Array(e); d < e; d++) q[d] && j.isFunction(q[d].promise) ? q[d].promise().done(B(d, s, q)).fail(n.reject).progress(B(d, m, f)) : --l
            }
            return l || n.resolveWith(s, q), n.promise()
        }
    });
    var Pc = j,
        ab, P, Ga, ia, Ha, Ia, T, ja, Ja, bb, ua, Kb, M = C.createElement("div");
    M.setAttribute("className", "t");
    M.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = M.getElementsByTagName("*");
    ia = M.getElementsByTagName("a")[0];
    ia.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) ab = {};
    else {
        Ha = C.createElement("select");
        Ia = Ha.appendChild(C.createElement("option"));
        T = M.getElementsByTagName("input")[0];
        P = {
            leadingWhitespace: 3 === M.firstChild.nodeType,
            tbody: !M.getElementsByTagName("tbody").length,
            htmlSerialize: !!M.getElementsByTagName("link").length,
            style: /top/.test(ia.getAttribute("style")),
            hrefNormalized: "/a" === ia.getAttribute("href"),
            opacity: /^0.5/.test(ia.style.opacity),
            cssFloat: !!ia.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== M.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        P.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        P.optDisabled = !Ia.disabled;
        try {
            delete M.test
        } catch (Rd) {
            P.deleteExpando = !1
        } !M.addEventListener && M.attachEvent && M.fireEvent && (M.attachEvent("onclick", Kb = function () {
            P.noCloneEvent = !1
        }), M.cloneNode(!0).fireEvent("onclick"), M.detachEvent("onclick", Kb));
        T = C.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        P.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        M.appendChild(T);
        ja = C.createDocumentFragment();
        ja.appendChild(M.lastChild);
        P.checkClone = ja.cloneNode(!0).cloneNode(!0).lastChild.checked;
        P.appendChecked = T.checked;
        ja.removeChild(T);
        ja.appendChild(M);
        if (M.attachEvent)
            for (bb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ja = "on" + bb, (ua = Ja in M) || (M.setAttribute(Ja, "return;"), ua = "function" == typeof M[Ja]), P[bb + "Bubbles"] = ua;
        ab = (j(function () {
            var z, d, q, e, j = C.getElementsByTagName("body")[0];
            j && (z = C.createElement("div"), z.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", j.insertBefore(z, j.firstChild), d = C.createElement("div"), z.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", q = d.getElementsByTagName("td"), q[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === q[0].offsetHeight, q[0].style.display = "", q[1].style.display = "none", P.reliableHiddenOffsets = ua && 0 === q[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", P.boxSizing = 4 === d.offsetWidth, P.doesNotIncludeMarginInBodyOffset = 1 !== j.offsetTop, c.getComputedStyle && (P.pixelPosition = "1%" !== (c.getComputedStyle(d, null) || {}).top, P.boxSizingReliable = "4px" === (c.getComputedStyle(d, null) || {
                width: "4px"
            }).width, e = C.createElement("div"), e.style.cssText = d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", d.style.width = "1px", d.appendChild(e), P.reliableMarginRight = !parseFloat((c.getComputedStyle(e, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", P.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", P.shrinkWrapBlocks = 3 !== d.offsetWidth, z.style.zoom = 1), j.removeChild(z))
        }), ja.removeChild(M), Ga = ia = Ha = Ia = T = ja = M = null, P)
    }
    Pc.support = ab;
    var uc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        tc = /([A-Z])/g;
    j.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (j.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (c) {
            return c = c.nodeType ? j.cache[c[j.expando]] : c[j.expando], !!c && !f(c)
        },
        data: function (c, v, q, e) {
            if (j.acceptData(c)) {
                var l, n, B = j.expando,
                    f = "string" == typeof v,
                    m = c.nodeType,
                    s = m ? j.cache : c,
                    p = m ? c[B] : c[B] && B;
                if (p && s[p] && (e || s[p].data) || !(f && q === d)) {
                    p || (m ? c[B] = p = j.deletedIds.pop() || j.guid++ : p = B);
                    s[p] || (s[p] = {}, m || (s[p].toJSON = j.noop));
                    if ("object" == typeof v || "function" == typeof v) e ? s[p] = j.extend(s[p], v) : s[p].data = j.extend(s[p].data, v);
                    return l = s[p], e || (l.data || (l.data = {}), l = l.data), q !== d && (l[j.camelCase(v)] = q), f ? (n = l[v], null == n && (n = l[j.camelCase(v)])) : n = l, n
                }
            }
        },
        removeData: function (c, d, q) {
            if (j.acceptData(c)) {
                var e, l, n, B = c.nodeType,
                    m = B ? j.cache : c,
                    s = B ? c[j.expando] : j.expando;
                if (m[s]) {
                    if (d && (e = q ? m[s] : m[s].data)) {
                        j.isArray(d) || (d in e ? d = [d] : (d = j.camelCase(d), d in e ? d = [d] : d = d.split(" ")));
                        l = 0;
                        for (n = d.length; l < n; l++) delete e[d[l]];
                        if (!(q ? f : j.isEmptyObject)(e)) return
                    }
                    if (q || !(delete m[s].data, !f(m[s]))) B ? j.cleanData([c], !0) : j.support.deleteExpando || m != m.window ? delete m[s] : m[s] = null
                }
            }
        },
        _data: function (c, d, q) {
            return j.data(c, d, q, !0)
        },
        acceptData: function (c) {
            var d = c.nodeName && j.noData[c.nodeName.toLowerCase()];
            return !d || !0 !== d && c.getAttribute("classid") === d
        }
    });
    j.fn.extend({
        data: function (c, v) {
            var q, l, n, f, B, m = this[0],
                s = 0,
                p = null;
            if (c === d) {
                if (this.length && (p = j.data(m), 1 === m.nodeType && !j._data(m, "parsedAttrs"))) {
                    n = m.attributes;
                    for (B = n.length; s < B; s++) f = n[s].name, f.indexOf("data-") || (f = j.camelCase(f.substring(5)), e(m, f, p[f]));
                    j._data(m, "parsedAttrs", !0)
                }
                return p
            }
            return "object" == typeof c ? this.each(function () {
                j.data(this, c)
            }) : (q = c.split(".", 2), q[1] = q[1] ? "." + q[1] : "", l = q[1] + "!", j.access(this, function (v) {
                if (v === d) return p = this.triggerHandler("getData" + l, [q[0]]), p === d && m && (p = j.data(m, c), p = e(m, c, p)), p === d && q[1] ? this.data(q[0]) : p;
                q[1] = v;
                this.each(function () {
                    var d = j(this);
                    d.triggerHandler("setData" + l, q);
                    j.data(this, c, v);
                    d.triggerHandler("changeData" +
                        l, q)
                })
            }, null, v, 1 < arguments.length, null, !1))
        },
        removeData: function (c) {
            return this.each(function () {
                j.removeData(this, c)
            })
        }
    });
    j.extend({
        queue: function (c, d, q) {
            var e;
            if (c) return d = (d || "fx") + "queue", e = j._data(c, d), q && (!e || j.isArray(q) ? e = j._data(c, d, j.makeArray(q)) : e.push(q)), e || []
        },
        dequeue: function (c, d) {
            d = d || "fx";
            var q = j.queue(c, d),
                e = q.length,
                l = q.shift(),
                n = j._queueHooks(c, d),
                B = function () {
                    j.dequeue(c, d)
                };
            "inprogress" === l && (l = q.shift(), e--);
            l && ("fx" === d && q.unshift("inprogress"), delete n.stop, l.call(c, B, n));
            !e && n && n.empty.fire()
        },
        _queueHooks: function (c, d) {
            var q = d + "queueHooks";
            return j._data(c, q) || j._data(c, q, {
                empty: j.Callbacks("once memory").add(function () {
                    j.removeData(c, d + "queue", !0);
                    j.removeData(c, q, !0)
                })
            })
        }
    });
    j.fn.extend({
        queue: function (c, v) {
            var q = 2;
            return "string" != typeof c && (v = c, c = "fx", q--), arguments.length < q ? j.queue(this[0], c) : v === d ? this : this.each(function () {
                var d = j.queue(this, c, v);
                j._queueHooks(this, c);
                "fx" === c && "inprogress" !== d[0] && j.dequeue(this, c)
            })
        },
        dequeue: function (c) {
            return this.each(function () {
                j.dequeue(this, c)
            })
        },
        delay: function (c, d) {
            return c = j.fx ? j.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function (d, v) {
                var e = setTimeout(d, c);
                v.stop = function () {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function (c) {
            return this.queue(c || "fx", [])
        },
        promise: function (c, v) {
            var q, e = 1,
                l = j.Deferred(),
                n = this,
                B = this.length,
                f = function () {
                    --e || l.resolveWith(n, [n])
                };
            "string" != typeof c && (v = c, c = d);
            for (c = c || "fx"; B--;)(q = j._data(n[B], c + "queueHooks")) && q.empty && (e++, q.empty.add(f));
            return f(), l.promise(v)
        }
    });
    var ca, Lb, Mb, Nb = /[\t\r\n]/g,
        Qc = /\r/g,
        Rc = /^(?:button|input)$/i,
        Sc = /^(?:button|input|object|select|textarea)$/i,
        Tc = /^a(?:rea|)$/i,
        Ob = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Pb = j.support.getSetAttribute;
    j.fn.extend({
        attr: function (c, d) {
            return j.access(this, j.attr, c, d, 1 < arguments.length)
        },
        removeAttr: function (c) {
            return this.each(function () {
                j.removeAttr(this, c)
            })
        },
        prop: function (c, d) {
            return j.access(this, j.prop, c, d, 1 < arguments.length)
        },
        removeProp: function (c) {
            return c = j.propFix[c] || c, this.each(function () {
                try {
                    this[c] = d, delete this[c]
                } catch (v) { }
            })
        },
        addClass: function (c) {
            var d, q, e, l, n, f, m;
            if (j.isFunction(c)) return this.each(function (d) {
                j(this).addClass(c.call(this, d, this.className))
            });
            if (c && "string" == typeof c) {
                d = c.split(ha);
                q = 0;
                for (e = this.length; q < e; q++)
                    if (l = this[q], 1 === l.nodeType)
                        if (!l.className && 1 === d.length) l.className = c;
                        else {
                            n = " " + l.className + " ";
                            f = 0;
                            for (m = d.length; f < m; f++) 0 > n.indexOf(" " + d[f] + " ") && (n += d[f] + " ");
                            l.className = j.trim(n)
                        }
            }
            return this
        },
        removeClass: function (c) {
            var v, q, e, l, n, f, m;
            if (j.isFunction(c)) return this.each(function (d) {
                j(this).removeClass(c.call(this, d, this.className))
            });
            if (c && "string" == typeof c || c === d) {
                v = (c || "").split(ha);
                f = 0;
                for (m = this.length; f < m; f++)
                    if (e = this[f], 1 === e.nodeType && e.className) {
                        q = (" " + e.className + " ").replace(Nb, " ");
                        l = 0;
                        for (n = v.length; l < n; l++)
                            for (; 0 <= q.indexOf(" " + v[l] + " ");) q = q.replace(" " + v[l] + " ", " ");
                        e.className = c ? j.trim(q) : ""
                    }
            }
            return this
        },
        toggleClass: function (c, d) {
            var q = typeof c,
                e = "boolean" == typeof d;
            return j.isFunction(c) ? this.each(function (q) {
                j(this).toggleClass(c.call(this, q, this.className, d), d)
            }) : this.each(function () {
                if ("string" === q)
                    for (var l, n = 0, f = j(this), m = d, s = c.split(ha); l = s[n++];) m = e ? m : !f.hasClass(l), f[m ? "addClass" : "removeClass"](l);
                else if ("undefined" === q || "boolean" === q) this.className && j._data(this, "__className__", this.className), this.className = this.className || !1 === c ? "" : j._data(this, "__className__") || ""
            })
        },
        hasClass: function (c) {
            c = " " + c + " ";
            for (var d = 0, q = this.length; d < q; d++)
                if (1 === this[d].nodeType && 0 <= (" " + this[d].className + " ").replace(Nb, " ").indexOf(c)) return !0;
            return !1
        },
        val: function (c) {
            var v, q, e, l = this[0];
            if (arguments.length) return e = j.isFunction(c), this.each(function (q) {
                var l, n = j(this);
                if (1 === this.nodeType && (e ? l = c.call(this, q, n.val()) : l = c, null == l ? l = "" : "number" == typeof l ? l += "" : j.isArray(l) && (l = j.map(l, function (c) {
                    return null == c ? "" : c + ""
                })), v = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], !v || !("set" in v) || v.set(this, l, "value") === d)) this.value = l
            });
            if (l) return v = j.valHooks[l.type] || j.valHooks[l.nodeName.toLowerCase()], v && "get" in v && (q = v.get(l, "value")) !== d ? q : (q = l.value, "string" == typeof q ? q.replace(Qc, "") : null == q ? "" : q)
        }
    });
    j.extend({
        valHooks: {
            option: {
                get: function (c) {
                    var d = c.attributes.value;
                    return !d || d.specified ? c.value : c.text
                }
            },
            select: {
                get: function (c) {
                    var d, q, e = c.selectedIndex,
                        l = [],
                        n = c.options,
                        f = "select-one" === c.type;
                    if (0 > e) return null;
                    c = f ? e : 0;
                    for (q = f ? e + 1 : n.length; c < q; c++)
                        if (d = n[c], d.selected && (j.support.optDisabled ? !d.disabled : null === d.getAttribute("disabled")) && (!d.parentNode.disabled || !j.nodeName(d.parentNode, "optgroup"))) {
                            d = j(d).val();
                            if (f) return d;
                            l.push(d)
                        }
                    return f && !l.length && n.length ? j(n[e]).val() : l
                },
                set: function (c, d) {
                    var q = j.makeArray(d);
                    return j(c).find("option").each(function () {
                        this.selected = 0 <= j.inArray(j(this).val(), q)
                    }), q.length || (c.selectedIndex = -1), q
                }
            }
        },
        attrFn: {},
        attr: function (c, v, q, e) {
            var l, n, f = c.nodeType;
            if (c && !(3 === f || 8 === f || 2 === f)) {
                if (e && j.isFunction(j.fn[v])) return j(c)[v](q);
                if ("undefined" == typeof c.getAttribute) return j.prop(c, v, q);
                (e = 1 !== f || !j.isXMLDoc(c)) && (v = v.toLowerCase(), n = j.attrHooks[v] || (Ob.test(v) ? Lb : ca));
                if (q !== d) {
                    if (null === q) {
                        j.removeAttr(c, v);
                        return
                    }
                    return n && "set" in n && e && (l = n.set(c, q, v)) !== d ? l : (c.setAttribute(v, q + ""), q)
                }
                return n && "get" in n && e && null !== (l = n.get(c, v)) ? l : (l = c.getAttribute(v), null === l ? d : l)
            }
        },
        removeAttr: function (c, d) {
            var e, l, n, f, m = 0;
            if (d && 1 === c.nodeType)
                for (l = d.split(ha); m < l.length; m++)(n = l[m]) && (e = j.propFix[n] || n, f = Ob.test(n), f || j.attr(c, n, ""), c.removeAttribute(Pb ? n : e), f && e in c && (c[e] = !1))
        },
        attrHooks: {
            type: {
                set: function (c, d) {
                    if (Rc.test(c.nodeName) && c.parentNode) j.error("type property can't be changed");
                    else if (!j.support.radioValue && "radio" === d && j.nodeName(c, "input")) {
                        var e = c.value;
                        return c.setAttribute("type", d), e && (c.value = e), d
                    }
                }
            },
            value: {
                get: function (c, d) {
                    return ca && j.nodeName(c, "button") ? ca.get(c, d) : d in c ? c.value : null
                },
                set: function (c, d, e) {
                    if (ca && j.nodeName(c, "button")) return ca.set(c, d, e);
                    c.value = d
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (c, e, q) {
            var l, n, f, m = c.nodeType;
            if (c && !(3 === m || 8 === m || 2 === m)) return f = 1 !== m || !j.isXMLDoc(c), f && (e = j.propFix[e] || e, n = j.propHooks[e]), q !== d ? n && "set" in n && (l = n.set(c, q, e)) !== d ? l : c[e] = q : n && "get" in n && null !== (l = n.get(c, e)) ? l : c[e]
        },
        propHooks: {
            tabIndex: {
                get: function (c) {
                    var e = c.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : Sc.test(c.nodeName) || Tc.test(c.nodeName) && c.href ? 0 : d
                }
            }
        }
    });
    Lb = {
        get: function (c, e) {
            var q, l = j.prop(c, e);
            return !0 === l || "boolean" != typeof l && (q = c.getAttributeNode(e)) && !1 !== q.nodeValue ? e.toLowerCase() : d
        },
        set: function (c, d, e) {
            var l;
            return !1 === d ? j.removeAttr(c, e) : (l = j.propFix[e] || e, l in c && (c[l] = !0), c.setAttribute(e, e.toLowerCase())), e
        }
    };
    Pb || (Mb = {
        name: !0,
        id: !0,
        coords: !0
    }, ca = j.valHooks.button = {
        get: function (c, e) {
            var q;
            return q = c.getAttributeNode(e), q && (Mb[e] ? "" !== q.value : q.specified) ? q.value : d
        },
        set: function (c, d, e) {
            var l = c.getAttributeNode(e);
            return l || (l = C.createAttribute(e), c.setAttributeNode(l)), l.value = d + ""
        }
    }, j.each(["width", "height"], function (c, d) {
        j.attrHooks[d] = j.extend(j.attrHooks[d], {
            set: function (c, z) {
                if ("" === z) return c.setAttribute(d, "auto"), z
            }
        })
    }), j.attrHooks.contenteditable = {
        get: ca.get,
        set: function (c, d, e) {
            "" === d && (d = "false");
            ca.set(c, d, e)
        }
    });
    j.support.hrefNormalized || j.each(["href", "src", "width", "height"], function (c, e) {
        j.attrHooks[e] = j.extend(j.attrHooks[e], {
            get: function (c) {
                c = c.getAttribute(e, 2);
                return null === c ? d : c
            }
        })
    });
    j.support.style || (j.attrHooks.style = {
        get: function (c) {
            return c.style.cssText.toLowerCase() || d
        },
        set: function (c, d) {
            return c.style.cssText = d + ""
        }
    });
    j.support.optSelected || (j.propHooks.selected = j.extend(j.propHooks.selected, {
        get: function (c) {
            c = c.parentNode;
            return c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex), null
        }
    }));
    j.support.enctype || (j.propFix.enctype = "encoding");
    j.support.checkOn || j.each(["radio", "checkbox"], function () {
        j.valHooks[this] = {
            get: function (c) {
                return null === c.getAttribute("value") ? "on" : c.value
            }
        }
    });
    j.each(["radio", "checkbox"], function () {
        j.valHooks[this] = j.extend(j.valHooks[this], {
            set: function (c, d) {
                if (j.isArray(d)) return c.checked = 0 <= j.inArray(j(c).val(), d)
            }
        })
    });
    var cb = /^(?:textarea|input|select)$/i,
        Qb = /^([^\.]*|)(?:\.(.+)|)$/,
        Uc = /(?:^|\s)hover(\.\S+|)\b/,
        Vc = /^key/,
        Wc = /^(?:mouse|contextmenu)|click/,
        Rb = /^(?:focusinfocus|focusoutblur)$/,
        Sb = function (c) {
            return j.event.special.hover ? c : c.replace(Uc, "mouseenter$1 mouseleave$1")
        };
    j.event = {
        add: function (c, e, q, l, n) {
            var f, m, s, p, x, y, t, A, u;
            if (!(3 === c.nodeType || 8 === c.nodeType || !e || !q || !(f = j._data(c)))) {
                q.handler && (t = q, q = t.handler, n = t.selector);
                q.guid || (q.guid = j.guid++);
                (s = f.events) || (f.events = s = {});
                (m = f.handle) || (f.handle = m = function (c) {
                    return "undefined" != typeof j && (!c || j.event.triggered !== c.type) ? j.event.dispatch.apply(m.elem, arguments) : d
                }, m.elem = c);
                e = j.trim(Sb(e)).split(" ");
                for (f = 0; f < e.length; f++) {
                    p = Qb.exec(e[f]) || [];
                    x = p[1];
                    y = (p[2] || "").split(".").sort();
                    u = j.event.special[x] || {};
                    x = (n ? u.delegateType : u.bindType) || x;
                    u = j.event.special[x] || {};
                    p = j.extend({
                        type: x,
                        origType: p[1],
                        data: l,
                        handler: q,
                        guid: q.guid,
                        selector: n,
                        needsContext: n && j.expr.match.needsContext.test(n),
                        namespace: y.join(".")
                    }, t);
                    A = s[x];
                    if (!A && (A = s[x] = [], A.delegateCount = 0, !u.setup || !1 === u.setup.call(c, l, y, m))) c.addEventListener ? c.addEventListener(x, m, !1) : c.attachEvent && c.attachEvent("on" + x, m);
                    u.add && (u.add.call(c, p), p.handler.guid || (p.handler.guid = q.guid));
                    n ? A.splice(A.delegateCount++, 0, p) : A.push(p);
                    j.event.global[x] = !0
                }
                c = null
            }
        },
        global: {},
        remove: function (c, d, e, l, n) {
            var f, m, s, p, x, y, t, A, u, D, C = j.hasData(c) && j._data(c);
            if (C && (t = C.events)) {
                d = j.trim(Sb(d || "")).split(" ");
                for (f = 0; f < d.length; f++)
                    if (m = Qb.exec(d[f]) || [], s = p = m[1], m = m[2], s) {
                        A = j.event.special[s] || {};
                        s = (l ? A.delegateType : A.bindType) || s;
                        u = t[s] || [];
                        x = u.length;
                        m = m ? RegExp("(^|\\.)" + m.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (y = 0; y < u.length; y++) D = u[y], (n || p === D.origType) && (!e || e.guid === D.guid) && (!m || m.test(D.namespace)) && (!l || l === D.selector || "**" === l && D.selector) && (u.splice(y--, 1), D.selector && u.delegateCount--, A.remove && A.remove.call(c, D));
                        0 === u.length && x !== u.length && ((!A.teardown || !1 === A.teardown.call(c, m, C.handle)) && j.removeEvent(c, s, C.handle), delete t[s])
                    } else
                        for (s in t) j.event.remove(c, s + d[f], e, l, !0);
                j.isEmptyObject(t) && (delete C.handle, j.removeData(c, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (z, e, q, l) {
            if (!q || 3 !== q.nodeType && 8 !== q.nodeType) {
                var n, f, m, s, p, x, y, t = z.type || z;
                s = [];
                if (!Rb.test(t + j.event.triggered) && (0 <= t.indexOf("!") && (t = t.slice(0, -1), n = !0), 0 <= t.indexOf(".") && (s = t.split("."), t = s.shift(), s.sort()), q && !j.event.customEvent[t] || j.event.global[t]))
                    if (z = "object" == typeof z ? z[j.expando] ? z : new j.Event(t, z) : new j.Event(t), z.type = t, z.isTrigger = !0, z.exclusive = n, z.namespace = s.join("."), z.namespace_re = z.namespace ? RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, s = 0 > t.indexOf(":") ? "on" + t : "", q) {
                        if (z.result = d, z.target || (z.target = q), e = null != e ? j.makeArray(e) : [], e.unshift(z), p = j.event.special[t] || {}, !(p.trigger && !1 === p.trigger.apply(q, e))) {
                            y = [
                                [q, p.bindType || t]
                            ];
                            if (!l && !p.noBubble && !j.isWindow(q)) {
                                f = p.delegateType || t;
                                n = Rb.test(f + t) ? q : q.parentNode;
                                for (m = q; n; n = n.parentNode) y.push([n, f]), m = n;
                                m === (q.ownerDocument || C) && y.push([m.defaultView || m.parentWindow || c, f])
                            }
                            for (f = 0; f < y.length && !z.isPropagationStopped(); f++) n = y[f][0], z.type = y[f][1], (x = (j._data(n, "events") || {})[z.type] && j._data(n, "handle")) && x.apply(n, e), (x = s && n[s]) && j.acceptData(n) && x.apply && !1 === x.apply(n, e) && z.preventDefault();
                            return z.type = t, !l && !z.isDefaultPrevented() && (!p._default || !1 === p._default.apply(q.ownerDocument, e)) && ("click" !== t || !j.nodeName(q, "a")) && j.acceptData(q) && s && q[t] && ("focus" !== t && "blur" !== t || 0 !== z.target.offsetWidth) && !j.isWindow(q) && (m = q[s], m && (q[s] = null), j.event.triggered = t, q[t](), j.event.triggered = d, m && (q[s] = m)), z.result
                        }
                    } else
                        for (f in q = j.cache, q) q[f].events && q[f].events[t] && j.event.trigger(z, e, q[f].handle.elem, !0)
            }
        },
        dispatch: function (z) {
            z = j.event.fix(z || c.event);
            var e, q, l, n, f, m, s = (j._data(this, "events") || {})[z.type] || [],
                p = s.delegateCount,
                x = aa.call(arguments),
                y = !z.exclusive && !z.namespace,
                t = j.event.special[z.type] || {},
                A = [];
            x[0] = z;
            z.delegateTarget = this;
            if (!(t.preDispatch && !1 === t.preDispatch.call(this, z))) {
                if (p && (!z.button || "click" !== z.type))
                    for (q = z.target; q != this; q = q.parentNode || this)
                        if (!0 !== q.disabled || "click" !== z.type) {
                            n = {};
                            f = [];
                            for (e = 0; e < p; e++) l = s[e], m = l.selector, n[m] === d && (n[m] = l.needsContext ? 0 <= j(m, this).index(q) : j.find(m, this, null, [q]).length), n[m] && f.push(l);
                            f.length && A.push({
                                elem: q,
                                matches: f
                            })
                        }
                s.length > p && A.push({
                    elem: this,
                    matches: s.slice(p)
                });
                for (e = 0; e < A.length && !z.isPropagationStopped(); e++) {
                    n = A[e];
                    z.currentTarget = n.elem;
                    for (q = 0; q < n.matches.length && !z.isImmediatePropagationStopped(); q++)
                        if (l = n.matches[q], y || !z.namespace && !l.namespace || z.namespace_re && z.namespace_re.test(l.namespace)) z.data = l.data, z.handleObj = l, l = ((j.event.special[l.origType] || {}).handle || l.handler).apply(n.elem, x), l !== d && (z.result = l, !1 === l && (z.preventDefault(), z.stopPropagation()))
                }
                return t.postDispatch && t.postDispatch.call(this, z), z.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (c, d) {
                return null == c.which && (c.which = null != d.charCode ? d.charCode : d.keyCode), c
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (c, e) {
                var q, l, j, n = e.button,
                    f = e.fromElement;
                return null == c.pageX && null != e.clientX && (q = c.target.ownerDocument || C, l = q.documentElement, j = q.body, c.pageX = e.clientX + (l && l.scrollLeft || j && j.scrollLeft || 0) - (l && l.clientLeft || j && j.clientLeft || 0), c.pageY = e.clientY + (l && l.scrollTop || j && j.scrollTop || 0) - (l && l.clientTop || j && j.clientTop || 0)), !c.relatedTarget && f && (c.relatedTarget = f === c.target ? e.toElement : f), !c.which && n !== d && (c.which = n & 1 ? 1 : n & 2 ? 3 : n & 4 ? 2 : 0), c
            }
        },
        fix: function (c) {
            if (c[j.expando]) return c;
            var d, e, l = c,
                n = j.event.fixHooks[c.type] || {},
                f = n.props ? this.props.concat(n.props) : this.props;
            c = j.Event(l);
            for (d = f.length; d;) e = f[--d], c[e] = l[e];
            return c.target || (c.target = l.srcElement || C), 3 === c.target.nodeType && (c.target = c.target.parentNode), c.metaKey = !!c.metaKey, n.filter ? n.filter(c, l) : c
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (c, d, e) {
                    j.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown: function (c, d) {
                    this.onbeforeunload === d && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (c, d, e, l) {
            c = j.extend(new j.Event, e, {
                type: c,
                isSimulated: !0,
                originalEvent: {}
            });
            l ? j.event.trigger(c, null, d) : j.event.dispatch.call(d, c);
            c.isDefaultPrevented() && e.preventDefault()
        }
    };
    j.event.handle = j.event.dispatch;
    j.removeEvent = C.removeEventListener ? function (c, d, e) {
        c.removeEventListener && c.removeEventListener(d, e, !1)
    } : function (c, d, e) {
        d = "on" + d;
        c.detachEvent && ("undefined" == typeof c[d] && (c[d] = null), c.detachEvent(d, e))
    };
    j.Event = function (c, d) {
        if (this instanceof j.Event) c && c.type ? (this.originalEvent = c, this.type = c.type, this.isDefaultPrevented = c.defaultPrevented || !1 === c.returnValue || c.getPreventDefault && c.getPreventDefault() ? p : m) : this.type = c, d && j.extend(this, d), this.timeStamp = c && c.timeStamp || j.now(), this[j.expando] = !0;
        else return new j.Event(c, d)
    };
    j.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = p;
            var c = this.originalEvent;
            c && (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = p;
            var c = this.originalEvent;
            c && (c.stopPropagation && c.stopPropagation(), c.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = p;
            this.stopPropagation()
        },
        isDefaultPrevented: m,
        isPropagationStopped: m,
        isImmediatePropagationStopped: m
    };
    j.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (c, d) {
        j.event.special[c] = {
            delegateType: d,
            bindType: d,
            handle: function (c) {
                var z, e = c.relatedTarget,
                    l = c.handleObj;
                if (!e || e !== this && !j.contains(this, e)) c.type = l.origType, z = l.handler.apply(this, arguments), c.type = d;
                return z
            }
        }
    });
    j.support.submitBubbles || (j.event.special.submit = {
        setup: function () {
            if (j.nodeName(this, "form")) return !1;
            j.event.add(this, "click._submit keypress._submit", function (c) {
                c = c.target;
                (c = j.nodeName(c, "input") || j.nodeName(c, "button") ? c.form : d) && !j._data(c, "_submit_attached") && (j.event.add(c, "submit._submit", function (c) {
                    c._submit_bubble = !0
                }), j._data(c, "_submit_attached", !0))
            })
        },
        postDispatch: function (c) {
            c._submit_bubble && (delete c._submit_bubble, this.parentNode && !c.isTrigger && j.event.simulate("submit", this.parentNode, c, !0))
        },
        teardown: function () {
            if (j.nodeName(this, "form")) return !1;
            j.event.remove(this, "._submit")
        }
    });
    j.support.changeBubbles || (j.event.special.change = {
        setup: function () {
            if (cb.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) j.event.add(this, "propertychange._change", function (c) {
                    "checked" === c.originalEvent.propertyName && (this._just_changed = !0)
                }), j.event.add(this, "click._change", function (c) {
                    this._just_changed && !c.isTrigger && (this._just_changed = !1);
                    j.event.simulate("change", this, c, !0)
                });
                return !1
            }
            j.event.add(this, "beforeactivate._change", function (c) {
                c = c.target;
                cb.test(c.nodeName) && !j._data(c, "_change_attached") && (j.event.add(c, "change._change", function (c) {
                    this.parentNode && !c.isSimulated && !c.isTrigger && j.event.simulate("change", this.parentNode, c, !0)
                }), j._data(c, "_change_attached", !0))
            })
        },
        handle: function (c) {
            var d = c.target;
            if (this !== d || c.isSimulated || c.isTrigger || "radio" !== d.type && "checkbox" !== d.type) return c.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return j.event.remove(this, "._change"), !cb.test(this.nodeName)
        }
    });
    j.support.focusinBubbles || j.each({
        focus: "focusin",
        blur: "focusout"
    }, function (c, d) {
        var e = 0,
            l = function (c) {
                j.event.simulate(d, c.target, j.event.fix(c), !0)
            };
        j.event.special[d] = {
            setup: function () {
                0 === e++ && C.addEventListener(c, l, !0)
            },
            teardown: function () {
                0 === --e && C.removeEventListener(c, l, !0)
            }
        }
    });
    j.fn.extend({
        on: function (c, e, l, n, f) {
            var s, B;
            if ("object" == typeof c) {
                "string" != typeof e && (l = l || e, e = d);
                for (B in c) this.on(B, e, l, c[B], f);
                return this
            }
            null == l && null == n ? (n = e, l = e = d) : null == n && ("string" == typeof e ? (n = l, l = d) : (n = l, l = e, e = d));
            if (!1 === n) n = m;
            else if (!n) return this;
            return 1 === f && (s = n, n = function (c) {
                return j().off(c), s.apply(this, arguments)
            }, n.guid = s.guid || (s.guid = j.guid++)), this.each(function () {
                j.event.add(this, c, n, l, e)
            })
        },
        one: function (c, d, e, l) {
            return this.on(c, d, e, l, 1)
        },
        off: function (c, e, l) {
            var n, f;
            if (c && c.preventDefault && c.handleObj) return n = c.handleObj, j(c.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof c) {
                for (f in c) this.off(f, e, c[f]);
                return this
            }
            if (!1 === e || "function" == typeof e) l = e, e = d;
            return !1 === l && (l = m), this.each(function () {
                j.event.remove(this, c, l, e)
            })
        },
        bind: function (c, d, e) {
            return this.on(c, null, d, e)
        },
        unbind: function (c, d) {
            return this.off(c, null, d)
        },
        live: function (c, d, e) {
            return j(this.context).on(c, this.selector, d, e), this
        },
        die: function (c, d) {
            return j(this.context).off(c, this.selector || "**", d), this
        },
        delegate: function (c, d, e, l) {
            return this.on(d, c, e, l)
        },
        undelegate: function (c, d, e) {
            return 1 === arguments.length ? this.off(c, "**") : this.off(d, c || "**", e)
        },
        trigger: function (c, d) {
            return this.each(function () {
                j.event.trigger(c, d, this)
            })
        },
        triggerHandler: function (c, d) {
            if (this[0]) return j.event.trigger(c, d, this[0], !0)
        },
        toggle: function (c) {
            var d = arguments,
                e = c.guid || j.guid++,
                l = 0,
                n = function (e) {
                    var q = (j._data(this, "lastToggle" + c.guid) || 0) % l;
                    return j._data(this, "lastToggle" + c.guid, q + 1), e.preventDefault(), d[q].apply(this, arguments) || !1
                };
            for (n.guid = e; l < d.length;) d[l++].guid = e;
            return this.click(n)
        },
        hover: function (c, d) {
            return this.mouseenter(c).mouseleave(d || c)
        }
    });
    j.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (c, d) {
        j.fn[d] = function (c, e) {
            return null == e && (e = c, c = null), 0 < arguments.length ? this.on(d, null, c, e) : this.trigger(d)
        };
        Vc.test(d) && (j.event.fixHooks[d] = j.event.keyHooks);
        Wc.test(d) && (j.event.fixHooks[d] = j.event.mouseHooks)
    });
    var Xc = c,
        L = function (c, d, e, l) {
            e = e || [];
            d = d || X;
            var j, n, f, m, s = d.nodeType;
            if (!c || "string" != typeof c) return e;
            if (1 !== s && 9 !== s) return [];
            f = Ka(d);
            if (!f && !l && (j = Yc.exec(c)))
                if (m = j[1])
                    if (9 === s) {
                        n = d.getElementById(m);
                        if (!n || !n.parentNode) return e;
                        if (n.id === m) return e.push(n), e
                    } else {
                        if (d.ownerDocument && (n = d.ownerDocument.getElementById(m)) && Tb(d, n) && n.id === m) return e.push(n), e
                    } else {
                    if (j[2]) return pa.apply(e, qa.call(d.getElementsByTagName(c), 0)), e;
                    if ((m = j[3]) && Ub && d.getElementsByClassName) return pa.apply(e, qa.call(d.getElementsByClassName(m), 0)), e
                }
            return db(c.replace(La, "$1"), d, e, l, f)
        },
        va = function (c) {
            return function (d) {
                return "input" === d.nodeName.toLowerCase() && d.type === c
            }
        },
        Vb = function (c) {
            return function (d) {
                var e = d.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && d.type === c
            }
        },
        ka = function (c) {
            return Y(function (d) {
                return d = +d, Y(function (e, l) {
                    for (var j, n = c([], e.length, d), f = n.length; f--;) e[j = n[f]] && (e[j] = !(l[j] = e[j]))
                })
            })
        },
        Ma = function (c, d, e) {
            if (c === d) return e;
            for (c = c.nextSibling; c;) {
                if (c === d) return -1;
                c = c.nextSibling
            }
            return 1
        },
        Oa = function (c, d) {
            var e, l, j, n, f, m, s;
            if (f = Wb[N][c]) return d ? 0 : f.slice(0);
            f = c;
            m = [];
            for (s = O.preFilter; f;) {
                if (!e || (l = Zc.exec(f))) l && (f = f.slice(l[0].length)), m.push(j = []);
                e = !1;
                if (l = $c.exec(f)) j.push(e = new Xb(l.shift())), f = f.slice(e.length), e.type = l[0].replace(La, " ");
                for (n in O.filter) (l = Na[n].exec(f)) && (!s[n] || (l = s[n](l, X, !0))) && (j.push(e = new Xb(l.shift())), f = f.slice(e.length), e.type = n, e.matches = l);
                if (!e) break
            }
            return d ? f.length : f ? L.error(c) : Wb(c, m).slice(0)
        },
        fb = function (c, d, e) {
            var l = d.dir,
                j = e && "parentNode" === d.dir,
                n = ad++;
            return d.first ? function (d, e, q) {
                for (; d = d[l];)
                    if (j || 1 === d.nodeType) return c(d, e, q)
            } : function (d, e, q) {
                if (q)
                    for (; d = d[l];) {
                        if ((j || 1 === d.nodeType) && c(d, e, q)) return d
                    } else
                    for (var v, f = wa + " " + n + " ", m = f + eb; d = d[l];)
                        if (j || 1 === d.nodeType) {
                            if ((v = d[N]) === m) return d.sizset;
                            if ("string" == typeof v && 0 === v.indexOf(f)) {
                                if (d.sizset) return d
                            } else {
                                d[N] = m;
                                if (c(d, e, q)) return d.sizset = !0, d;
                                d.sizset = !1
                            }
                        }
            }
        },
        gb = function (c) {
            return 1 < c.length ? function (d, e, l) {
                for (var j = c.length; j--;)
                    if (!c[j](d, e, l)) return !1;
                return !0
            } : c[0]
        },
        Pa = function (c, d, e, l, j) {
            for (var n, f = [], m = 0, s = c.length, p = null != d; m < s; m++)
                if (n = c[m])
                    if (!e || e(n, l, j)) f.push(n), p && d.push(m);
            return f
        },
        hb = function (c, d, e, l, j, n) {
            return l && !l[N] && (l = hb(l)), j && !j[N] && (j = hb(j, n)), Y(function (n, f, m, s) {
                if (!n || !j) {
                    var p, x, y = [],
                        t = [],
                        E = f.length;
                    if (!(x = n)) {
                        x = d || "*";
                        var A = m.nodeType ? [m] : m,
                            u = [];
                        p = 0;
                        for (var D = A.length; p < D; p++) L(x, A[p], u, n);
                        x = u
                    }
                    A = c && (n || !d) ? Pa(x, y, c, m, s) : x;
                    u = e ? j || (n ? c : E || l) ? [] : f : A;
                    e && e(A, u, m, s);
                    if (l) {
                        x = Pa(u, t);
                        l(x, [], m, s);
                        for (m = x.length; m--;)
                            if (p = x[m]) u[t[m]] = !(A[t[m]] = p)
                    }
                    if (n)
                        for (m = c && u.length; m--;) {
                            if (p = u[m]) n[y[m]] = !(f[y[m]] = p)
                        } else u = Pa(u === f ? u.splice(E, u.length) : u), j ? j(null, f, u, s) : pa.apply(f, u)
                }
            })
        },
        ib = function (c) {
            var d, e, l, j = c.length,
                n = O.relative[c[0].type];
            e = n || O.relative[" "];
            for (var f = n ? 1 : 0, m = fb(function (c) {
                return c === d
            }, e, !0), s = fb(function (c) {
                return -1 < Yb.call(d, c)
            }, e, !0), p = [
                function (c, e, l) {
                    return !n && (l || e !== Qa) || ((d = e).nodeType ? m(c, e, l) : s(c, e, l))
                }
            ]; f < j; f++)
                if (e = O.relative[c[f].type]) p = [fb(gb(p), e)];
                else {
                    e = O.filter[c[f].type].apply(null, c[f].matches);
                    if (e[N]) {
                        for (l = ++f; l < j && !O.relative[c[l].type]; l++);
                        return hb(1 < f && gb(p), 1 < f && c.slice(0, f - 1).join("").replace(La, "$1"), e, f < l && ib(c.slice(f, l)), l < j && ib(c = c.slice(l)), l < j && c.join(""))
                    }
                    p.push(e)
                }
            return gb(p)
        },
        db = function (c, d, e, l, j) {
            var n, f, m, s, p = Oa(c);
            if (!l && 1 === p.length) {
                f = p[0] = p[0].slice(0);
                if (2 < f.length && "ID" === (m = f[0]).type && 9 === d.nodeType && !j && O.relative[f[1].type]) {
                    d = O.find.ID(m.matches[0].replace(la, ""), d, j)[0];
                    if (!d) return e;
                    c = c.slice(f.shift().length)
                }
                for (n = Na.POS.test(c) ? -1 : f.length - 1; 0 <= n; n--) {
                    m = f[n];
                    if (O.relative[s = m.type]) break;
                    if (s = O.find[s])
                        if (l = s(m.matches[0].replace(la, ""), jb.test(f[0].type) && d.parentNode || d, j)) {
                            f.splice(n, 1);
                            c = l.length && f.join("");
                            if (!c) return pa.apply(e, qa.call(l, 0)), e;
                            break
                        }
                }
            }
            return kb(c, p)(l, d, j, e, jb.test(c)), e
        },
        Zb = function () { },
        eb, lb, O, Ra, Ka, Tb, kb, mb, xa, Qa, $b = !0,
        N = ("sizcache" + Math.random()).replace(".", ""),
        Xb = String,
        X = Xc.document,
        W = X.documentElement,
        wa = 0,
        ad = 0,
        bd = [].pop,
        pa = [].push,
        qa = [].slice,
        Yb = [].indexOf || function (c) {
            for (var d = 0, e = this.length; d < e; d++)
                if (this[d] === c) return d;
            return -1
        },
        Y = function (c, d) {
            return c[N] = null == d || d, c
        },
        nb = function () {
            var c = {},
                d = [];
            return Y(function (e, l) {
                return d.push(e) > O.cacheLength && delete c[d.shift()], c[e] = l
            }, c)
        },
        ac = nb(),
        Wb = nb(),
        bc = nb(),
        cc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        ob = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + cc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Zc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        $c = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        cd = RegExp(ob),
        Yc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        jb = /[\x20\t\r\n\f]*[+~]/,
        dd = /h\d/i,
        ed = /input|select|textarea|button/i,
        la = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + cc),
            PSEUDO: RegExp("^" + ob),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        da = function (c) {
            var d = X.createElement("div");
            try {
                return c(d)
            } catch (e) {
                return !1
            } finally { }
        },
        fd = da(function (c) {
            return c.appendChild(X.createComment("")), !c.getElementsByTagName("*").length
        }),
        gd = da(function (c) {
            return c.innerHTML = "<a href='#'></a>", c.firstChild && "undefined" !== typeof c.firstChild.getAttribute && "#" === c.firstChild.getAttribute("href")
        }),
        hd = da(function (c) {
            c.innerHTML = "<select></select>";
            c = typeof c.lastChild.getAttribute("multiple");
            return "boolean" !== c && "string" !== c
        }),
        Ub = da(function (c) {
            return c.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !c.getElementsByClassName || !c.getElementsByClassName("e").length ? !1 : (c.lastChild.className = "e", 2 === c.getElementsByClassName("e").length)
        }),
        id = da(function (c) {
            c.id = N + 0;
            c.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>";
            W.insertBefore(c, W.firstChild);
            var d = X.getElementsByName && X.getElementsByName(N).length === 2 + X.getElementsByName(N + 0).length;
            return lb = !X.getElementById(N), W.removeChild(c), d
        });
    try {
        qa.call(W.childNodes, 0)[0].nodeType
    } catch (Sd) {
        qa = function (c) {
            for (var d, e = []; d = this[c]; c++) e.push(d);
            return e
        }
    }
    L.matches = function (c, d) {
        return L(c, null, null, d)
    };
    L.matchesSelector = function (c, d) {
        return 0 < L(d, null, null, [c]).length
    };
    Ra = L.getText = function (c) {
        var d, e = "",
            l = 0;
        if (d = c.nodeType)
            if (1 === d || 9 === d || 11 === d) {
                if ("string" == typeof c.textContent) return c.textContent;
                for (c = c.firstChild; c; c = c.nextSibling) e += Ra(c)
            } else {
                if (3 === d || 4 === d) return c.nodeValue
            } else
            for (; d = c[l]; l++) e += Ra(d);
        return e
    };
    Ka = L.isXML = function (c) {
        return (c = c && (c.ownerDocument || c).documentElement) ? "HTML" !== c.nodeName : !1
    };
    Tb = L.contains = W.contains ? function (c, d) {
        var e = 9 === c.nodeType ? c.documentElement : c,
            l = d && d.parentNode;
        return c === l || !(!l || !(1 === l.nodeType && e.contains && e.contains(l)))
    } : W.compareDocumentPosition ? function (c, d) {
        return d && !!(c.compareDocumentPosition(d) & 16)
    } : function (c, d) {
        for (; d = d.parentNode;)
            if (d === c) return !0;
        return !1
    };
    L.attr = function (c, d) {
        var e, l = Ka(c);
        return l || (d = d.toLowerCase()), (e = O.attrHandle[d]) ? e(c) : l || hd ? c.getAttribute(d) : (e = c.getAttributeNode(d), e ? "boolean" == typeof c[d] ? c[d] ? d : null : e.specified ? e.value : null : null)
    };
    O = L.selectors = {
        cacheLength: 50,
        createPseudo: Y,
        match: Na,
        attrHandle: gd ? {} : {
            href: function (c) {
                return c.getAttribute("href", 2)
            },
            type: function (c) {
                return c.getAttribute("type")
            }
        },
        find: {
            ID: lb ? function (c, d, e) {
                if ("undefined" !== typeof d.getElementById && !e) return (c = d.getElementById(c)) && c.parentNode ? [c] : []
            } : function (c, d, e) {
                if ("undefined" !== typeof d.getElementById && !e) return (d = d.getElementById(c)) ? d.id === c || "undefined" !== typeof d.getAttributeNode && d.getAttributeNode("id").value === c ? [d] : void 0 : []
            },
            TAG: fd ? function (c, d) {
                if ("undefined" !== typeof d.getElementsByTagName) return d.getElementsByTagName(c)
            } : function (c, d) {
                var e = d.getElementsByTagName(c);
                if ("*" === c) {
                    for (var l, j = [], n = 0; l = e[n]; n++) 1 === l.nodeType && j.push(l);
                    return j
                }
                return e
            },
            NAME: id && function (c, d) {
                if ("undefined" !== typeof d.getElementsByName) return d.getElementsByName(name)
            },
            CLASS: Ub && function (c, d, e) {
                if ("undefined" !== typeof d.getElementsByClassName && !e) return d.getElementsByClassName(c)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function (c) {
                return c[1] = c[1].replace(la, ""), c[3] = (c[4] || c[5] || "").replace(la, ""), "~=" === c[2] && (c[3] = " " + c[3] + " "), c.slice(0, 4)
            },
            CHILD: function (c) {
                return c[1] = c[1].toLowerCase(), "nth" === c[1] ? (c[2] || L.error(c[0]), c[3] = +(c[3] ? c[4] + (c[5] || 1) : 2 * ("even" === c[2] || "odd" === c[2])), c[4] = +(c[6] + c[7] || "odd" === c[2])) : c[2] && L.error(c[0]), c
            },
            PSEUDO: function (c) {
                var d, e;
                if (Na.CHILD.test(c[0])) return null;
                if (c[3]) c[2] = c[3];
                else if (d = c[4]) cd.test(d) && (e = Oa(d, !0)) && (e = d.indexOf(")", d.length - e) - d.length) && (d = d.slice(0, e), c[0] = c[0].slice(0, e)), c[2] = d;
                return c.slice(0, 3)
            }
        },
        filter: {
            ID: lb ? function (c) {
                return c = c.replace(la, ""),
                    function (d) {
                        return d.getAttribute("id") === c
                    }
            } : function (c) {
                return c = c.replace(la, ""),
                    function (d) {
                        return (d = "undefined" !== typeof d.getAttributeNode && d.getAttributeNode("id")) && d.value === c
                    }
            },
            TAG: function (c) {
                return "*" === c ? function () {
                    return !0
                } : (c = c.replace(la, "").toLowerCase(), function (d) {
                    return d.nodeName && d.nodeName.toLowerCase() === c
                })
            },
            CLASS: function (c) {
                var d = ac[N][c];
                return d || (d = ac(c, RegExp("(^|[\\x20\\t\\r\\n\\f])" + c + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function (c) {
                        return d.test(c.className || "undefined" !== typeof c.getAttribute && c.getAttribute("class") || "")
                    }
            },
            ATTR: function (c, d, e) {
                return function (l) {
                    l = L.attr(l, c);
                    return null == l ? "!=" === d : d ? (l += "", "=" === d ? l === e : "!=" === d ? l !== e : "^=" === d ? e && 0 === l.indexOf(e) : "*=" === d ? e && -1 < l.indexOf(e) : "$=" === d ? e && l.substr(l.length - e.length) === e : "~=" === d ? -1 < (" " + l + " ").indexOf(e) : "|=" === d ? l === e || l.substr(0, e.length + 1) === e + "-" : !1) : !0
                }
            },
            CHILD: function (c, d, e, l) {
                return "nth" === c ? function (c) {
                    var d, j;
                    d = c.parentNode;
                    if (1 === e && 0 === l) return !0;
                    if (d) {
                        j = 0;
                        for (d = d.firstChild; d && !(1 === d.nodeType && (j++, c === d)); d = d.nextSibling);
                    }
                    return j -= l, j === e || 0 === j % e && 0 <= j / e
                } : function (d) {
                    var e = d;
                    switch (c) {
                        case "only":
                        case "first":
                            for (; e = e.previousSibling;)
                                if (1 === e.nodeType) return !1;
                            if ("first" === c) return !0;
                            e = d;
                        case "last":
                            for (; e = e.nextSibling;)
                                if (1 === e.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function (c, d) {
                var e, l = O.pseudos[c] || O.setFilters[c.toLowerCase()] || L.error("unsupported pseudo: " + c);
                return l[N] ? l(d) : 1 < l.length ? (e = [c, c, "", d], O.setFilters.hasOwnProperty(c.toLowerCase()) ? Y(function (c, e) {
                    for (var j, z = l(c, d), q = z.length; q--;) j = Yb.call(c, z[q]), c[j] = !(e[j] = z[q])
                }) : function (c) {
                    return l(c, 0, e)
                }) : l
            }
        },
        pseudos: {
            not: Y(function (c) {
                var d = [],
                    e = [],
                    l = kb(c.replace(La, "$1"));
                return l[N] ? Y(function (c, d, e, j) {
                    j = l(c, null, j, []);
                    for (var z = c.length; z--;)
                        if (e = j[z]) c[z] = !(d[z] = e)
                }) : function (c, j, z) {
                    return d[0] = c, l(d, null, z, e), !e.pop()
                }
            }),
            has: Y(function (c) {
                return function (d) {
                    return 0 < L(c, d).length
                }
            }),
            contains: Y(function (c) {
                return function (d) {
                    return -1 < (d.textContent || d.innerText || Ra(d)).indexOf(c)
                }
            }),
            enabled: function (c) {
                return !1 === c.disabled
            },
            disabled: function (c) {
                return !0 === c.disabled
            },
            checked: function (c) {
                var d = c.nodeName.toLowerCase();
                return "input" === d && !!c.checked || "option" === d && !!c.selected
            },
            selected: function (c) {
                return c.parentNode && c.parentNode.selectedIndex, !0 === c.selected
            },
            parent: function (c) {
                return !O.pseudos.empty(c)
            },
            empty: function (c) {
                var d;
                for (c = c.firstChild; c;) {
                    if ("@" < c.nodeName || 3 === (d = c.nodeType) || 4 === d) return !1;
                    c = c.nextSibling
                }
                return !0
            },
            header: function (c) {
                return dd.test(c.nodeName)
            },
            text: function (c) {
                var d, e;
                return "input" === c.nodeName.toLowerCase() && "text" === (d = c.type) && (null == (e = c.getAttribute("type")) || e.toLowerCase() === d)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Vb("submit"),
            reset: Vb("reset"),
            button: function (c) {
                var d = c.nodeName.toLowerCase();
                return "input" === d && "button" === c.type || "button" === d
            },
            input: function (c) {
                return ed.test(c.nodeName)
            },
            focus: function (c) {
                var d = c.ownerDocument;
                return c === d.activeElement && (!d.hasFocus || d.hasFocus()) && (!!c.type || !!c.href)
            },
            active: function (c) {
                return c === c.ownerDocument.activeElement
            },
            first: ka(function () {
                return [0]
            }),
            last: ka(function (c, d) {
                return [d - 1]
            }),
            eq: ka(function (c, d, e) {
                return [0 > e ? e + d : e]
            }),
            even: ka(function (c, d) {
                for (var e = 0; e < d; e += 2) c.push(e);
                return c
            }),
            odd: ka(function (c, d) {
                for (var e = 1; e < d; e += 2) c.push(e);
                return c
            }),
            lt: ka(function (c, d, e) {
                for (d = 0 > e ? e + d : e; 0 <= --d;) c.push(d);
                return c
            }),
            gt: ka(function (c, d, e) {
                for (e = 0 > e ? e + d : e; ++e < d;) c.push(e);
                return c
            })
        }
    };
    mb = W.compareDocumentPosition ? function (c, d) {
        return c === d ? (xa = !0, 0) : (!c.compareDocumentPosition || !d.compareDocumentPosition ? c.compareDocumentPosition : c.compareDocumentPosition(d) & 4) ? -1 : 1
    } : function (c, d) {
        if (c === d) return xa = !0, 0;
        if (c.sourceIndex && d.sourceIndex) return c.sourceIndex - d.sourceIndex;
        var e, l, j = [],
            n = [];
        e = c.parentNode;
        l = d.parentNode;
        var f = e;
        if (e === l) return Ma(c, d);
        if (!e) return -1;
        if (!l) return 1;
        for (; f;) j.unshift(f), f = f.parentNode;
        for (f = l; f;) n.unshift(f), f = f.parentNode;
        e = j.length;
        l = n.length;
        for (f = 0; f < e && f < l; f++)
            if (j[f] !== n[f]) return Ma(j[f], n[f]);
        return f === e ? Ma(c, n[f], -1) : Ma(j[f], d, 1)
    };
    [0, 0].sort(mb);
    $b = !xa;
    L.uniqueSort = function (c) {
        var d, e = 1;
        xa = $b;
        c.sort(mb);
        if (xa)
            for (; d = c[e]; e++) d === c[e - 1] && c.splice(e--, 1);
        return c
    };
    L.error = function (c) {
        throw Error("Syntax error, unrecognized expression: " + c);
    };
    kb = L.compile = function (c, d) {
        var e, l = [],
            j = [],
            n = bc[N][c];
        if (!n) {
            d || (d = Oa(c));
            for (e = d.length; e--;) n = ib(d[e]), n[N] ? l.push(n) : j.push(n);
            var f = 0 < l.length,
                m = 0 < j.length,
                s = function (c, d, e, z, q) {
                    var n, v, p = [],
                        x = 0,
                        y = "0",
                        t = c && [],
                        E = null != q,
                        A = Qa,
                        u = c || m && O.find.TAG("*", q && d.parentNode || d),
                        D = wa += null == A ? 1 : Math.E;
                    for (E && (Qa = d !== X && d, eb = s.el); null != (q = u[y]); y++) {
                        if (m && q) {
                            for (n = 0; v = j[n]; n++)
                                if (v(q, d, e)) {
                                    z.push(q);
                                    break
                                }
                            E && (wa = D, eb = ++s.el)
                        }
                        f && ((q = !v && q) && x--, c && t.push(q))
                    }
                    x += y;
                    if (f && y !== x) {
                        for (n = 0; v = l[n]; n++) v(t, p, d, e);
                        if (c) {
                            if (0 < x)
                                for (; y--;)!t[y] && !p[y] && (p[y] = bd.call(z));
                            p = Pa(p)
                        }
                        pa.apply(z, p);
                        E && !c && 0 < p.length && 1 < x + l.length && L.uniqueSort(z)
                    }
                    return E && (wa = D, Qa = A), t
                };
            e = (s.el = 0, f ? Y(s) : s);
            n = bc(c, e)
        }
        return n
    };
    if (X.querySelectorAll) {
        var dc, jd = db,
            kd = /'|\\/g,
            ld = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Z = [":focus"],
            Sa = [":active", ":focus"],
            Ta = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector || W.msMatchesSelector;
        da(function (c) {
            c.innerHTML = "<select><option selected=''></option></select>";
            c.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            c.querySelectorAll(":checked").length || Z.push(":checked")
        });
        da(function (c) {
            c.innerHTML = "<p test=''></p>";
            c.querySelectorAll("[test^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            c.innerHTML = "<input type='hidden'/>";
            c.querySelectorAll(":enabled").length || Z.push(":enabled", ":disabled")
        });
        Z = RegExp(Z.join("|"));
        db = function (c, d, e, l, j) {
            if (!l && !j && (!Z || !Z.test(c))) {
                var n, f, m = !0,
                    s = N;
                f = d;
                n = 9 === d.nodeType && c;
                if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                    n = Oa(c);
                    (m = d.getAttribute("id")) ? s = m.replace(kd, "\\$&") : d.setAttribute("id", s);
                    s = "[id='" + s + "'] ";
                    for (f = n.length; f--;) n[f] = s + n[f].join("");
                    f = jb.test(c) && d.parentNode || d;
                    n = n.join(",")
                }
                if (n) try {
                    return pa.apply(e, qa.call(f.querySelectorAll(n), 0)), e
                } catch (p) { } finally {
                        m || d.removeAttribute("id")
                    }
            }
            return jd(c, d, e, l, j)
        };
        Ta && (da(function (c) {
            dc = Ta.call(c, "div");
            try {
                Ta.call(c, "[test!='']:sizzle"), Sa.push("!=", ob)
            } catch (d) { }
        }), Sa = RegExp(Sa.join("|")), L.matchesSelector = function (c, d) {
            d = d.replace(ld, "='$1']");
            if (!Ka(c) && !Sa.test(d) && (!Z || !Z.test(d))) try {
                var e = Ta.call(c, d);
                if (e || dc || c.document && 11 !== c.document.nodeType) return e
            } catch (l) { }
            return 0 < L(d, null, null, [c]).length
        })
    }
    O.pseudos.nth = O.pseudos.eq;
    O.filters = Zb.prototype = O.pseudos;
    O.setFilters = new Zb;
    L.attr = j.attr;
    j.find = L;
    j.expr = L.selectors;
    j.expr[":"] = j.expr.pseudos;
    j.unique = L.uniqueSort;
    j.text = L.getText;
    j.isXMLDoc = L.isXML;
    j.contains = L.contains;
    var md = /Until$/,
        nd = /^(?:parents|prev(?:Until|All))/,
        wc = /^.[^:#\[\.,]*$/,
        ec = j.expr.match.needsContext,
        od = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    j.fn.extend({
        find: function (c) {
            var d, e, l, n, f, m, s = this;
            if ("string" != typeof c) return j(c).filter(function () {
                d = 0;
                for (e = s.length; d < e; d++)
                    if (j.contains(s[d], this)) return !0
            });
            m = this.pushStack("", "find", c);
            d = 0;
            for (e = this.length; d < e; d++)
                if (l = m.length, j.find(c, this[d], m), 0 < d)
                    for (n = l; n < m.length; n++)
                        for (f = 0; f < l; f++)
                            if (m[f] === m[n]) {
                                m.splice(n--, 1);
                                break
                            }
            return m
        },
        has: function (c) {
            var d, e = j(c, this),
                l = e.length;
            return this.filter(function () {
                for (d = 0; d < l; d++)
                    if (j.contains(this, e[d])) return !0
            })
        },
        not: function (c) {
            return this.pushStack(l(this, c, !1), "not", c)
        },
        filter: function (c) {
            return this.pushStack(l(this, c, !0), "filter", c)
        },
        is: function (c) {
            return !!c && ("string" == typeof c ? ec.test(c) ? 0 <= j(c, this.context).index(this[0]) : 0 < j.filter(c, this).length : 0 < this.filter(c).length)
        },
        closest: function (c, d) {
            for (var e, l = 0, n = this.length, f = [], m = ec.test(c) || "string" != typeof c ? j(c, d || this.context) : 0; l < n; l++)
                for (e = this[l]; e && e.ownerDocument && e !== d && 11 !== e.nodeType;) {
                    if (m ? -1 < m.index(e) : j.find.matchesSelector(e, c)) {
                        f.push(e);
                        break
                    }
                    e = e.parentNode
                }
            return f = 1 < f.length ? j.unique(f) : f, this.pushStack(f, "closest", c)
        },
        index: function (c) {
            return c ? "string" == typeof c ? j.inArray(this[0], j(c)) : j.inArray(c.jquery ? c[0] : c, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (c, d) {
            var e = "string" == typeof c ? j(c, d) : j.makeArray(c && c.nodeType ? [c] : c),
                l = j.merge(this.get(), e);
            return this.pushStack(u(e[0]) || u(l[0]) ? l : j.unique(l))
        },
        addBack: function (c) {
            return this.add(null == c ? this.prevObject : this.prevObject.filter(c))
        }
    });
    j.fn.andSelf = j.fn.addBack;
    j.each({
        parent: function (c) {
            return (c = c.parentNode) && 11 !== c.nodeType ? c : null
        },
        parents: function (c) {
            return j.dir(c, "parentNode")
        },
        parentsUntil: function (c, d, e) {
            return j.dir(c, "parentNode", e)
        },
        next: function (c) {
            return t(c, "nextSibling")
        },
        prev: function (c) {
            return t(c, "previousSibling")
        },
        nextAll: function (c) {
            return j.dir(c, "nextSibling")
        },
        prevAll: function (c) {
            return j.dir(c, "previousSibling")
        },
        nextUntil: function (c, d, e) {
            return j.dir(c, "nextSibling", e)
        },
        prevUntil: function (c, d, e) {
            return j.dir(c, "previousSibling", e)
        },
        siblings: function (c) {
            return j.sibling((c.parentNode || {}).firstChild, c)
        },
        children: function (c) {
            return j.sibling(c.firstChild)
        },
        contents: function (c) {
            return j.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document : j.merge([], c.childNodes)
        }
    }, function (c, d) {
        j.fn[c] = function (e, l) {
            var n = j.map(this, d, e);
            return md.test(c) || (l = e), l && "string" == typeof l && (n = j.filter(l, n)), n = 1 < this.length && !od[c] ? j.unique(n) : n, 1 < this.length && nd.test(c) && (n = n.reverse()), this.pushStack(n, c, aa.call(arguments).join(","))
        }
    });
    j.extend({
        filter: function (c, d, e) {
            return e && (c = ":not(" + c + ")"), 1 === d.length ? j.find.matchesSelector(d[0], c) ? [d[0]] : [] : j.find.matches(c, d)
        },
        dir: function (c, e, l) {
            var n = [];
            for (c = c[e]; c && 9 !== c.nodeType && (l === d || 1 !== c.nodeType || !j(c).is(l));) 1 === c.nodeType && n.push(c), c = c[e];
            return n
        },
        sibling: function (c, d) {
            for (var e = []; c; c = c.nextSibling) 1 === c.nodeType && c !== d && e.push(c);
            return e
        }
    });
    var vb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        pd = / jQuery\d+="(?:null|\d+)"/g,
        pb = /^\s+/,
        fc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        gc = /<([\w:]+)/,
        qd = /<tbody/i,
        rd = /<|&#?\w+;/,
        sd = /<(?:script|style|link)/i,
        td = /<(?:script|object|embed|option|style)/i,
        qb = RegExp("<(?:" + vb + ")[\\s/>]", "i"),
        wb = /^(?:checkbox|radio)$/,
        hc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ud = /\/(java|ecma)script/i,
        vd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        ic = n(C),
        rb = ic.appendChild(C.createElement("div"));
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    j.support.htmlSerialize || (V._default = [1, "X<div>", "</div>"]);
    j.fn.extend({
        text: function (c) {
            return j.access(this, function (c) {
                return c === d ? j.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(c))
            }, null, c, arguments.length)
        },
        wrapAll: function (c) {
            if (j.isFunction(c)) return this.each(function (d) {
                j(this).wrapAll(c.call(this, d))
            });
            if (this[0]) {
                var d = j(c, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && d.insertBefore(this[0]);
                d.map(function () {
                    for (var c = this; c.firstChild && 1 === c.firstChild.nodeType;) c = c.firstChild;
                    return c
                }).append(this)
            }
            return this
        },
        wrapInner: function (c) {
            return j.isFunction(c) ? this.each(function (d) {
                j(this).wrapInner(c.call(this, d))
            }) : this.each(function () {
                var d = j(this),
                    e = d.contents();
                e.length ? e.wrapAll(c) : d.append(c)
            })
        },
        wrap: function (c) {
            var d = j.isFunction(c);
            return this.each(function (e) {
                j(this).wrapAll(d ? c.call(this, e) : c)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                j.nodeName(this, "body") || j(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (c) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(c)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (c) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(c, this.firstChild)
            })
        },
        before: function () {
            if (!u(this[0])) return this.domManip(arguments, !1, function (c) {
                this.parentNode.insertBefore(c, this)
            });
            if (arguments.length) {
                var c = j.clean(arguments);
                return this.pushStack(j.merge(c, this), "before", this.selector)
            }
        },
        after: function () {
            if (!u(this[0])) return this.domManip(arguments, !1, function (c) {
                this.parentNode.insertBefore(c, this.nextSibling)
            });
            if (arguments.length) {
                var c = j.clean(arguments);
                return this.pushStack(j.merge(this, c), "after", this.selector)
            }
        },
        remove: function (c, d) {
            for (var e, l = 0; null != (e = this[l]); l++)
                if (!c || j.filter(c, [e]).length) !d && 1 === e.nodeType && (j.cleanData(e.getElementsByTagName("*")), j.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function () {
            for (var c, d = 0; null != (c = this[d]); d++)
                for (1 === c.nodeType && j.cleanData(c.getElementsByTagName("*")); c.firstChild;) c.removeChild(c.firstChild);
            return this
        },
        clone: function (c, d) {
            return c = null == c ? !1 : c, d = null == d ? c : d, this.map(function () {
                return j.clone(this, c, d)
            })
        },
        html: function (c) {
            return j.access(this, function (c) {
                var e = this[0] || {},
                    l = 0,
                    n = this.length;
                if (c === d) return 1 === e.nodeType ? e.innerHTML.replace(pd, "") : d;
                if ("string" == typeof c && !sd.test(c) && (j.support.htmlSerialize || !qb.test(c)) && (j.support.leadingWhitespace || !pb.test(c)) && !V[(gc.exec(c) || ["", ""])[1].toLowerCase()]) {
                    c = c.replace(fc, "<$1></$2>");
                    try {
                        for (; l < n; l++) e = this[l] || {}, 1 === e.nodeType && (j.cleanData(e.getElementsByTagName("*")), e.innerHTML = c);
                        e = 0
                    } catch (f) { }
                }
                e && this.empty().append(c)
            }, null, c, arguments.length)
        },
        replaceWith: function (c) {
            return u(this[0]) ? this.length ? this.pushStack(j(j.isFunction(c) ? c() : c), "replaceWith", c) : this : j.isFunction(c) ? this.each(function (d) {
                var e = j(this),
                    l = e.html();
                e.replaceWith(c.call(this, d, l))
            }) : ("string" != typeof c && (c = j(c).detach()), this.each(function () {
                var d = this.nextSibling,
                    e = this.parentNode;
                j(this).remove();
                d ? j(d).before(c) : j(e).append(c)
            }))
        },
        detach: function (c) {
            return this.remove(c, !0)
        },
        domManip: function (c, e, l) {
            c = [].concat.apply([], c);
            var n, f, m, s = 0,
                p = c[0],
                x = [],
                y = this.length;
            if (!j.support.checkClone && 1 < y && "string" == typeof p && hc.test(p)) return this.each(function () {
                j(this).domManip(c, e, l)
            });
            if (j.isFunction(p)) return this.each(function (n) {
                var f = j(this);
                c[0] = p.call(this, n, e ? f.html() : d);
                f.domManip(c, e, l)
            });
            if (this[0]) {
                n = j.buildFragment(c, this, x);
                m = n.fragment;
                f = m.firstChild;
                1 === m.childNodes.length && (m = f);
                if (f) {
                    e = e && j.nodeName(f, "tr");
                    for (n = n.cacheable || y - 1; s < y; s++) l.call(e && j.nodeName(this[s], "table") ? this[s].getElementsByTagName("tbody")[0] || this[s].appendChild(this[s].ownerDocument.createElement("tbody")) : this[s], s === n ? m : j.clone(m, !0, !0))
                }
                m = f = null;
                x.length && j.each(x, function (c, d) {
                    d.src ? j.ajax ? j.ajax({
                        url: d.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : j.error("no ajax") : j.globalEval((d.text || d.textContent || d.innerHTML || "").replace(vd, ""));
                    d.parentNode && d.parentNode.removeChild(d)
                })
            }
            return this
        }
    });
    j.buildFragment = function (c, e, l) {
        var n, f, m, s = c[0];
        return e = e || C, e = !e.nodeType && e[0] || e, e = e.ownerDocument || e, 1 === c.length && "string" == typeof s && 512 > s.length && e === C && "<" === s.charAt(0) && !td.test(s) && (j.support.checkClone || !hc.test(s)) && (j.support.html5Clone || !qb.test(s)) && (f = !0, n = j.fragments[s], m = n !== d), n || (n = e.createDocumentFragment(), j.clean(c, e, n, l), f && (j.fragments[s] = m && n)), {
            fragment: n,
            cacheable: f
        }
    };
    j.fragments = {};
    j.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (c, d) {
        j.fn[c] = function (e) {
            var l, n = 0,
                f = [];
            e = j(e);
            var m = e.length;
            l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === m) return e[d](this[0]), this;
            for (; n < m; n++) l = (0 < n ? this.clone(!0) : this).get(), j(e[n])[d](l), f = f.concat(l);
            return this.pushStack(f, c, e.selector)
        }
    });
    j.extend({
        clone: function (c, d, e) {
            var l, n, f, m;
            j.support.html5Clone || j.isXMLDoc(c) || !qb.test("<" + c.nodeName + ">") ? m = c.cloneNode(!0) : (rb.innerHTML = c.outerHTML, rb.removeChild(m = rb.firstChild));
            if ((!j.support.noCloneEvent || !j.support.noCloneChecked) && (1 === c.nodeType || 11 === c.nodeType) && !j.isXMLDoc(c)) {
                x(c, m);
                l = y(c);
                n = y(m);
                for (f = 0; l[f]; ++f) n[f] && x(l[f], n[f])
            }
            if (d && (s(c, m), e)) {
                l = y(c);
                n = y(m);
                for (f = 0; l[f]; ++f) s(l[f], n[f])
            }
            return m
        },
        clean: function (c, d, e, l) {
            var f, m, s, p, x, y, t, u = d === C && ic,
                D = [];
            if (!d || "undefined" == typeof d.createDocumentFragment) d = C;
            for (f = 0; null != (s = c[f]); f++)
                if ("number" == typeof s && (s += ""), s) {
                    if ("string" == typeof s)
                        if (rd.test(s)) {
                            u = u || n(d);
                            y = d.createElement("div");
                            u.appendChild(y);
                            s = s.replace(fc, "<$1></$2>");
                            m = (gc.exec(s) || ["", ""])[1].toLowerCase();
                            p = V[m] || V._default;
                            x = p[0];
                            for (y.innerHTML = p[1] + s + p[2]; x--;) y = y.lastChild;
                            if (!j.support.tbody) {
                                x = qd.test(s);
                                p = "table" === m && !x ? y.firstChild && y.firstChild.childNodes : "<table>" === p[1] && !x ? y.childNodes : [];
                                for (m = p.length - 1; 0 <= m; --m) j.nodeName(p[m], "tbody") && !p[m].childNodes.length && p[m].parentNode.removeChild(p[m])
                            } !j.support.leadingWhitespace && pb.test(s) && y.insertBefore(d.createTextNode(pb.exec(s)[0]), y.firstChild);
                            s = y.childNodes;
                            y.parentNode.removeChild(y)
                        } else s = d.createTextNode(s);
                    s.nodeType ? D.push(s) : j.merge(D, s)
                }
            y && (s = y = u = null);
            if (!j.support.appendChecked)
                for (f = 0; null != (s = D[f]); f++) j.nodeName(s, "input") ? A(s) : "undefined" != typeof s.getElementsByTagName && j.grep(s.getElementsByTagName("input"), A);
            if (e) {
                c = function (c) {
                    if (!c.type || ud.test(c.type)) return l ? l.push(c.parentNode ? c.parentNode.removeChild(c) : c) : e.appendChild(c)
                };
                for (f = 0; null != (s = D[f]); f++)
                    if (!j.nodeName(s, "script") || !c(s)) e.appendChild(s), "undefined" != typeof s.getElementsByTagName && (t = j.grep(j.merge([], s.getElementsByTagName("script")), c), D.splice.apply(D, [f + 1, 0].concat(t)), f += t.length)
            }
            return D
        },
        cleanData: function (c, d) {
            for (var e, l, n, f, m = 0, s = j.expando, p = j.cache, x = j.support.deleteExpando, y = j.event.special; null != (n = c[m]); m++)
                if (d || j.acceptData(n))
                    if (e = (l = n[s]) && p[l]) {
                        if (e.events)
                            for (f in e.events) y[f] ? j.event.remove(n, f) : j.removeEvent(n, f, e.handle);
                        p[l] && (delete p[l], x ? delete n[s] : n.removeAttribute ? n.removeAttribute(s) : n[s] = null, j.deletedIds.push(l))
                    }
        }
    });
    var Ua, ea;
    j.uaMatch = function (c) {
        c = c.toLowerCase();
        c = /(chrome)[ \/]([\w.]+)/.exec(c) || /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || 0 > c.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c) || [];
        return {
            browser: c[1] || "",
            version: c[2] || "0"
        }
    };
    Ua = j.uaMatch(Bc.userAgent);
    ea = {};
    Ua.browser && (ea[Ua.browser] = !0, ea.version = Ua.version);
    ea.chrome ? ea.webkit = !0 : ea.webkit && (ea.safari = !0);
    j.browser = ea;
    j.sub = function () {
        function c(d, e) {
            return new c.fn.init(d, e)
        }
        j.extend(!0, c, this);
        c.superclass = this;
        c.fn = c.prototype = this();
        c.fn.constructor = c;
        c.sub = this.sub;
        c.fn.init = function (e, l) {
            return l && l instanceof j && !(l instanceof c) && (l = c(l)), j.fn.init.call(this, e, l, d)
        };
        c.fn.init.prototype = c.fn;
        var d = c(C);
        return c
    };
    var Q, na, oa, sb = /alpha\([^)]*\)/i,
        wd = /opacity=([^)]*)/,
        xd = /^(top|right|bottom|left)$/,
        yd = /^(none|table(?!-c[ea]).+)/,
        jc = /^margin/,
        xc = RegExp("^(" + Ea + ")(.*)$", "i"),
        ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        zd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Xa = {},
        Ad = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        kc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ga = ["Top", "Right", "Bottom", "Left"],
        xb = ["Webkit", "O", "Moz", "ms"],
        Bd = j.fn.toggle;
    j.fn.extend({
        css: function (c, e) {
            return j.access(this, function (c, e, l) {
                return l !== d ? j.style(c, e, l) : j.css(c, e)
            }, c, e, 1 < arguments.length)
        },
        show: function () {
            return J(this, !0)
        },
        hide: function () {
            return J(this)
        },
        toggle: function (c, d) {
            var e = "boolean" == typeof c;
            return j.isFunction(c) && j.isFunction(d) ? Bd.apply(this, arguments) : this.each(function () {
                (e ? c : G(this)) ? j(this).show() : j(this).hide()
            })
        }
    });
    j.extend({
        cssHooks: {
            opacity: {
                get: function (c, d) {
                    if (d) {
                        var e = Q(c, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": j.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (c, e, l, n) {
            if (c && !(3 === c.nodeType || 8 === c.nodeType || !c.style)) {
                var f, m, s, p = j.camelCase(e),
                    x = c.style;
                e = j.cssProps[p] || (j.cssProps[p] = D(x, p));
                s = j.cssHooks[e] || j.cssHooks[p];
                if (l === d) return s && "get" in s && (f = s.get(c, !1, n)) !== d ? f : x[e];
                m = typeof l;
                "string" === m && (f = zd.exec(l)) && (l = (f[1] + 1) * f[2] + parseFloat(j.css(c, e)), m = "number");
                if (!(null == l || "number" === m && isNaN(l)))
                    if ("number" === m && !j.cssNumber[p] && (l += "px"), !s || !("set" in s) || (l = s.set(c, l, n)) !== d) try {
                        x[e] = l
                    } catch (y) { }
            }
        },
        css: function (c, e, l, n) {
            var f, m, s, p = j.camelCase(e);
            return e = j.cssProps[p] || (j.cssProps[p] = D(c.style, p)), s = j.cssHooks[e] || j.cssHooks[p], s && "get" in s && (f = s.get(c, !0, n)), f === d && (f = Q(c, e)), "normal" === f && e in kc && (f = kc[e]), l || n !== d ? (m = parseFloat(f), l || j.isNumeric(m) ? m || 0 : f) : f
        },
        swap: function (c, d, e) {
            var l, j = {};
            for (l in d) j[l] = c.style[l], c.style[l] = d[l];
            e = e.call(c);
            for (l in d) c.style[l] = j[l];
            return e
        }
    });
    c.getComputedStyle ? Q = function (d, e) {
        var l, n, f, m, s = c.getComputedStyle(d, null),
            p = d.style;
        return s && (l = s[e], "" === l && !j.contains(d.ownerDocument, d) && (l = j.style(d, e)), ya.test(l) && jc.test(e) && (n = p.width, f = p.minWidth, m = p.maxWidth, p.minWidth = p.maxWidth = p.width = l, l = s.width, p.width = n, p.minWidth = f, p.maxWidth = m)), l
    } : C.documentElement.currentStyle && (Q = function (c, d) {
        var e, l, j = c.currentStyle && c.currentStyle[d],
            n = c.style;
        return null == j && n && n[d] && (j = n[d]), ya.test(j) && !xd.test(d) && (e = n.left, l = c.runtimeStyle && c.runtimeStyle.left, l && (c.runtimeStyle.left = c.currentStyle.left), n.left = "fontSize" === d ? "1em" : j, j = n.pixelLeft + "px", n.left = e, l && (c.runtimeStyle.left = l)), "" === j ? "auto" : j
    });
    j.each(["height", "width"], function (c, d) {
        j.cssHooks[d] = {
            get: function (c, e, l) {
                if (e) return 0 === c.offsetWidth && yd.test(Q(c, "display")) ? j.swap(c, Ad, function () {
                    return ba(c, d, l)
                }) : ba(c, d, l)
            },
            set: function (c, e, l) {
                return F(c, e, l ? H(c, d, l, j.support.boxSizing && "border-box" === j.css(c, "boxSizing")) : 0)
            }
        }
    });
    j.support.opacity || (j.cssHooks.opacity = {
        get: function (c, d) {
            return wd.test((d && c.currentStyle ? c.currentStyle.filter : c.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : d ? "1" : ""
        },
        set: function (c, d) {
            var e = c.style,
                l = c.currentStyle,
                n = j.isNumeric(d) ? "alpha(opacity=" + 100 * d + ")" : "",
                f = l && l.filter || e.filter || "";
            e.zoom = 1;
            if (!(1 <= d && "" === j.trim(f.replace(sb, "")) && e.removeAttribute && (e.removeAttribute("filter"), l && !l.filter))) e.filter = sb.test(f) ? f.replace(sb, n) : f + " " + n
        }
    });
    j(function () {
        j.support.reliableMarginRight || (j.cssHooks.marginRight = {
            get: function (c, d) {
                return j.swap(c, {
                    display: "inline-block"
                }, function () {
                    if (d) return Q(c, "marginRight")
                })
            }
        });
        !j.support.pixelPosition && j.fn.position && j.each(["top", "left"], function (c, d) {
            j.cssHooks[d] = {
                get: function (c, e) {
                    if (e) {
                        var l = Q(c, d);
                        return ya.test(l) ? j(c).position()[d] + "px" : l
                    }
                }
            }
        })
    });
    j.expr && j.expr.filters && (j.expr.filters.hidden = function (c) {
        return 0 === c.offsetWidth && 0 === c.offsetHeight || !j.support.reliableHiddenOffsets && "none" === (c.style && c.style.display || Q(c, "display"))
    }, j.expr.filters.visible = function (c) {
        return !j.expr.filters.hidden(c)
    });
    j.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (c, d) {
        j.cssHooks[c + d] = {
            expand: function (e) {
                var l = "string" == typeof e ? e.split(" ") : [e],
                    j = {};
                for (e = 0; 4 > e; e++) j[c + ga[e] + d] = l[e] || l[e - 2] || l[0];
                return j
            }
        };
        jc.test(c) || (j.cssHooks[c + d].set = F)
    });
    var Cd = /%20/g,
        yc = /\[\]$/,
        lc = /\r?\n/g,
        Dd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ed = /^(?:select|textarea)/i;
    j.fn.extend({
        serialize: function () {
            return j.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? j.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Ed.test(this.nodeName) || Dd.test(this.type))
            }).map(function (c, d) {
                var e = j(this).val();
                return null == e ? null : j.isArray(e) ? j.map(e, function (c) {
                    return {
                        name: d.name,
                        value: c.replace(lc, "\r\n")
                    }
                }) : {
                    name: d.name,
                    value: e.replace(lc, "\r\n")
                }
            }).get()
        }
    });
    j.param = function (c, e) {
        var l, n = [],
            f = function (c, d) {
                d = j.isFunction(d) ? d() : null == d ? "" : d;
                n[n.length] = encodeURIComponent(c) + "=" + encodeURIComponent(d)
            };
        e === d && (e = j.ajaxSettings && j.ajaxSettings.traditional);
        if (j.isArray(c) || c.jquery && !j.isPlainObject(c)) j.each(c, function () {
            f(this.name, this.value)
        });
        else
            for (l in c) K(l, c[l], e, f);
        return n.join("&").replace(Cd, "+")
    };
    var ra, ma, Fd = /#.*$/,
        Gd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Hd = /^(?:GET|HEAD)$/,
        Id = /^\/\//,
        mc = /\?/,
        Jd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Kd = /([?&])_=[^&]*/,
        nc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        oc = j.fn.load,
        Ya = {},
        pc = {},
        qc = ["*/"] + ["*"];
    try {
        ma = Ac.href
    } catch (Td) {
        ma = C.createElement("a"), ma.href = "", ma = ma.href
    }
    ra = nc.exec(ma.toLowerCase()) || [];
    j.fn.load = function (c, e, l) {
        if ("string" != typeof c && oc) return oc.apply(this, arguments);
        if (!this.length) return this;
        var n, f, m, s = this,
            p = c.indexOf(" ");
        return 0 <= p && (n = c.slice(p, c.length), c = c.slice(0, p)), j.isFunction(e) ? (l = e, e = d) : e && "object" == typeof e && (f = "POST"), j.ajax({
            url: c,
            type: f,
            dataType: "html",
            data: e,
            complete: function (c, d) {
                l && s.each(l, m || [c.responseText, d, c])
            }
        }).done(function (c) {
            m = arguments;
            s.html(n ? j("<div>").append(c.replace(Jd, "")).find(n) : c)
        }), this
    };
    j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (c, d) {
        j.fn[d] = function (c) {
            return this.on(d, c)
        }
    });
    j.each(["get", "post"], function (c, e) {
        j[e] = function (c, l, n, f) {
            return j.isFunction(l) && (f = f || n, n = l, l = d), j.ajax({
                type: e,
                url: c,
                data: l,
                success: n,
                dataType: f
            })
        }
    });
    j.extend({
        getScript: function (c, e) {
            return j.get(c, d, e, "script")
        },
        getJSON: function (c, d, e) {
            return j.get(c, d, e, "json")
        },
        ajaxSetup: function (c, d) {
            return d ? zb(c, j.ajaxSettings) : (d = c, c = j.ajaxSettings), zb(c, d), c
        },
        ajaxSettings: {
            url: ma,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ra[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": qc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": c.String,
                "text html": !0,
                "text json": j.parseJSON,
                "text xml": j.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: yb(Ya),
        ajaxTransport: yb(pc),
        ajax: function (c, e) {
            function l(c, e, m, q) {
                var z, x, v, t, E, S = e;
                if (2 !== J) {
                    J = 2;
                    p && clearTimeout(p);
                    s = d;
                    f = q || "";
                    I.readyState = 0 < c ? 4 : 0;
                    if (m) {
                        t = A;
                        q = I;
                        var U, F, H, M, O = t.contents,
                            N = t.dataTypes,
                            P = t.responseFields;
                        for (F in P) F in m && (q[P[F]] = m[F]);
                        for (;
                            "*" === N[0];) N.shift(), U === d && (U = t.mimeType || q.getResponseHeader("content-type"));
                        if (U)
                            for (F in O)
                                if (O[F] && O[F].test(U)) {
                                    N.unshift(F);
                                    break
                                }
                        if (N[0] in m) H = N[0];
                        else {
                            for (F in m) {
                                if (!N[0] || t.converters[F + " " + N[0]]) {
                                    H = F;
                                    break
                                }
                                M || (M = F)
                            }
                            H = H || M
                        }
                        t = m = H ? (H !== N[0] && N.unshift(H), m[H]) : void 0
                    }
                    if (200 <= c && 300 > c || 304 === c)
                        if (A.ifModified && (E = I.getResponseHeader("Last-Modified"), E && (j.lastModified[n] = E), E = I.getResponseHeader("Etag"), E && (j.etag[n] = E)), 304 === c) S = "notmodified", z = !0;
                        else {
                            var K;
                            a: {
                                z = A;
                                x = t;
                                var Q, S = z.dataTypes.slice();
                                m = S[0];
                                U = {};
                                F = 0;
                                z.dataFilter && (x = z.dataFilter(x, z.dataType));
                                if (S[1])
                                    for (K in z.converters) U[K.toLowerCase()] = z.converters[K];
                                for (; v = S[++F];)
                                    if ("*" !== v) {
                                        if ("*" !== m && m !== v) {
                                            K = U[m + " " + v] || U["* " + v];
                                            if (!K)
                                                for (Q in U)
                                                    if (E = Q.split(" "), E[1] === v && (K = U[m + " " + E[0]] || U["* " + E[0]])) {
                                                        !0 === K ? K = U[Q] : !0 !== U[Q] && (v = E[0], S.splice(F--, 0, v));
                                                        break
                                                    }
                                            if (!0 !== K)
                                                if (K && z["throws"]) x = K(x);
                                                else try {
                                                    x = K(x)
                                                } catch (R) {
                                                    K = {
                                                        state: "parsererror",
                                                        error: K ? R : "No conversion from " + m + " to " + v
                                                    };
                                                    break a
                                                }
                                        }
                                        m = v
                                    }
                                K = {
                                    state: "success",
                                    data: x
                                }
                            }
                            z = K;
                            S = z.state;
                            x = z.data;
                            v = z.error;
                            z = !v
                        } else if (v = S, !S || c) S = "error", 0 > c && (c = 0);
                    I.status = c;
                    I.statusText = (e || S) + "";
                    z ? C.resolveWith(u, [x, S, I]) : C.rejectWith(u, [I, S, v]);
                    I.statusCode(L);
                    L = d;
                    y && D.trigger("ajax" + (z ? "Success" : "Error"), [I, A, z ? x : v]);
                    G.fireWith(u, [I, S]);
                    y && (D.trigger("ajaxComplete", [I, A]), --j.active || j.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (e = c, c = d);
            e = e || {};
            var n, f, m, s, p, x, y, t, A = j.ajaxSetup({}, e),
                u = A.context || A,
                D = u !== A && (u.nodeType || u instanceof j) ? j(u) : j.event,
                C = j.Deferred(),
                G = j.Callbacks("once memory"),
                L = A.statusCode || {},
                F = {},
                H = {},
                J = 0,
                M = "canceled",
                I = {
                    readyState: 0,
                    setRequestHeader: function (c, d) {
                        if (!J) {
                            var e = c.toLowerCase();
                            c = H[e] = H[e] || c;
                            F[c] = d
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === J ? f : null
                    },
                    getResponseHeader: function (c) {
                        var e;
                        if (2 === J) {
                            if (!m)
                                for (m = {}; e = Gd.exec(f);) m[e[1].toLowerCase()] = e[2];
                            e = m[c.toLowerCase()]
                        }
                        return e === d ? null : e
                    },
                    overrideMimeType: function (c) {
                        return J || (A.mimeType = c), this
                    },
                    abort: function (c) {
                        return c = c || M, s && s.abort(c), l(0, c), this
                    }
                };
            C.promise(I);
            I.success = I.done;
            I.error = I.fail;
            I.complete = G.add;
            I.statusCode = function (c) {
                if (c) {
                    var d;
                    if (2 > J)
                        for (d in c) L[d] = [L[d], c[d]];
                    else d = c[I.status], I.always(d)
                }
                return this
            };
            A.url = ((c || A.url) + "").replace(Fd, "").replace(Id, ra[1] + "//");
            A.dataTypes = j.trim(A.dataType || "*").toLowerCase().split(ha);
            null == A.crossDomain && (x = nc.exec(A.url.toLowerCase()) || !1, A.crossDomain = x && x.join(":") + (x[3] ? "" : "http:" === x[1] ? 80 : 443) !== ra.join(":") + (ra[3] ? "" : "http:" === ra[1] ? 80 : 443));
            A.data && A.processData && "string" != typeof A.data && (A.data = j.param(A.data, A.traditional));
            za(Ya, A, e, I);
            if (2 === J) return I;
            y = A.global;
            A.type = A.type.toUpperCase();
            A.hasContent = !Hd.test(A.type);
            y && 0 === j.active++ && j.event.trigger("ajaxStart");
            if (!A.hasContent && (A.data && (A.url += (mc.test(A.url) ? "&" : "?") + A.data, delete A.data), n = A.url, !1 === A.cache)) {
                x = j.now();
                var O = A.url.replace(Kd, "$1_=" + x);
                A.url = O + (O === A.url ? (mc.test(A.url) ? "&" : "?") + "_=" + x : "")
            } (A.data && A.hasContent && !1 !== A.contentType || e.contentType) && I.setRequestHeader("Content-Type", A.contentType);
            A.ifModified && (n = n || A.url, j.lastModified[n] && I.setRequestHeader("If-Modified-Since", j.lastModified[n]), j.etag[n] && I.setRequestHeader("If-None-Match", j.etag[n]));
            I.setRequestHeader("Accept", A.dataTypes[0] && A.accepts[A.dataTypes[0]] ? A.accepts[A.dataTypes[0]] + ("*" !== A.dataTypes[0] ? ", " + qc + "; q=0.01" : "") : A.accepts["*"]);
            for (t in A.headers) I.setRequestHeader(t, A.headers[t]);
            if (!A.beforeSend || !1 !== A.beforeSend.call(u, I, A) && 2 !== J) {
                M = "abort";
                for (t in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) I[t](A[t]);
                if (s = za(pc, A, e, I)) {
                    I.readyState = 1;
                    y && D.trigger("ajaxSend", [I, A]);
                    A.async && 0 < A.timeout && (p = setTimeout(function () {
                        I.abort("timeout")
                    }, A.timeout));
                    try {
                        J = 1, s.send(F, l)
                    } catch (N) {
                        if (2 > J) l(-1, N);
                        else throw N;
                    }
                } else l(-1, "No Transport");
                return I
            }
            return I.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var rc = [],
        Ld = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Md = j.now();
    j.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var c = rc.pop() || j.expando + "_" + Md++;
            return this[c] = !0, c
        }
    });
    j.ajaxPrefilter("json jsonp", function (e, l, n) {
        var f, m, s, p = e.data,
            x = e.url,
            y = !1 !== e.jsonp,
            t = y && Va.test(x),
            A = y && !t && "string" == typeof p && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(p);
        if ("jsonp" === e.dataTypes[0] || t || A) return f = e.jsonpCallback = j.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, m = c[f], t ? e.url = x.replace(Va, "$1" + f) : A ? e.data = p.replace(Va, "$1" + f) : y && (e.url += (Ld.test(x) ? "&" : "?") + e.jsonp + "=" + f), e.converters["script json"] = function () {
            return s || j.error(f + " was not called"), s[0]
        }, e.dataTypes[0] = "json", c[f] = function () {
            s = arguments
        }, n.always(function () {
            c[f] = m;
            e[f] && (e.jsonpCallback = l.jsonpCallback, rc.push(f));
            s && j.isFunction(m) && m(s[0]);
            s = m = d
        }), "script"
    });
    j.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (c) {
                return j.globalEval(c), c
            }
        }
    });
    j.ajaxPrefilter("script", function (c) {
        c.cache === d && (c.cache = !1);
        c.crossDomain && (c.type = "GET", c.global = !1)
    });
    j.ajaxTransport("script", function (c) {
        if (c.crossDomain) {
            var e, l = C.head || C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function (j, n) {
                    e = C.createElement("script");
                    e.async = "async";
                    c.scriptCharset && (e.charset = c.scriptCharset);
                    e.src = c.url;
                    e.onload = e.onreadystatechange = function (c, j) {
                        if (j || !e.readyState || /loaded|complete/.test(e.readyState)) e.onload = e.onreadystatechange = null, l && e.parentNode && l.removeChild(e), e = d, j || n(200, "success")
                    };
                    l.insertBefore(e, l.firstChild)
                },
                abort: function () {
                    e && e.onload(0, 1)
                }
            }
        }
    });
    var sa, tb = c.ActiveXObject ? function () {
        for (var c in sa) sa[c](0, 1)
    } : !1,
        Nd = 0;
    j.ajaxSettings.xhr = c.ActiveXObject ? function () {
        var d;
        if (!(d = !this.isLocal && Ab())) a: {
            try {
                d = new c.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (e) { }
            d = void 0
        }
        return d
    } : Ab;
    var ub = j.ajaxSettings.xhr();
    j.extend(j.support, {
        ajax: !!ub,
        cors: !!ub && "withCredentials" in ub
    });
    j.support.ajax && j.ajaxTransport(function (e) {
        if (!e.crossDomain || j.support.cors) {
            var l;
            return {
                send: function (n, f) {
                    var m, s, p = e.xhr();
                    e.username ? p.open(e.type, e.url, e.async, e.username, e.password) : p.open(e.type, e.url, e.async);
                    if (e.xhrFields)
                        for (s in e.xhrFields) p[s] = e.xhrFields[s];
                    e.mimeType && p.overrideMimeType && p.overrideMimeType(e.mimeType);
                    !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in n) p.setRequestHeader(s, n[s])
                    } catch (x) { }
                    p.send(e.hasContent && e.data || null);
                    l = function (c, n) {
                        var s, q, x, y, t;
                        try {
                            if (l && (n || 4 === p.readyState))
                                if (l = d, m && (p.onreadystatechange = j.noop, tb && delete sa[m]), n) 4 !== p.readyState && p.abort();
                                else {
                                    s = p.status;
                                    x = p.getAllResponseHeaders();
                                    y = {};
                                    (t = p.responseXML) && t.documentElement && (y.xml = t);
                                    try {
                                        y.text = p.responseText
                                    } catch (A) { }
                                    try {
                                        q = p.statusText
                                    } catch (u) {
                                        q = ""
                                    } !s && e.isLocal && !e.crossDomain ? s = y.text ? 200 : 404 : 1223 === s && (s = 204)
                                }
                        } catch (D) {
                            n || f(-1, D)
                        }
                        y && f(s, q, y, x)
                    };
                    e.async ? 4 === p.readyState ? setTimeout(l, 0) : (m = ++Nd, tb && (sa || (sa = {}, j(c).unload(tb)), sa[m] = l), p.onreadystatechange = l) : l()
                },
                abort: function () {
                    l && l(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Od = /^(?:toggle|show|hide)$/,
        Pd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Qd = /queueHooks$/,
        Ba = [
            function (c, d, e) {
                var l, n, f, m, s, p, x = this,
                    y = c.style,
                    t = {},
                    A = [],
                    u = c.nodeType && G(c);
                e.queue || (s = j._queueHooks(c, "fx"), null == s.unqueued && (s.unqueued = 0, p = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || p()
                }), s.unqueued++, x.always(function () {
                    x.always(function () {
                        s.unqueued--;
                        j.queue(c, "fx").length || s.empty.fire()
                    })
                }));
                1 === c.nodeType && ("height" in d || "width" in d) && (e.overflow = [y.overflow, y.overflowX, y.overflowY], "inline" === j.css(c, "display") && "none" === j.css(c, "float") && (!j.support.inlineBlockNeedsLayout || "inline" === fa(c.nodeName) ? y.display = "inline-block" : y.zoom = 1));
                e.overflow && (y.overflow = "hidden", j.support.shrinkWrapBlocks || x.done(function () {
                    y.overflow = e.overflow[0];
                    y.overflowX = e.overflow[1];
                    y.overflowY = e.overflow[2]
                }));
                for (l in d) n = d[l], Od.exec(n) && (delete d[l], n !== (u ? "hide" : "show") && A.push(l));
                if (n = A.length) {
                    f = j._data(c, "fxshow") || j._data(c, "fxshow", {});
                    u ? j(c).show() : x.done(function () {
                        j(c).hide()
                    });
                    x.done(function () {
                        var d;
                        j.removeData(c, "fxshow", !0);
                        for (d in t) j.style(c, d, t[d])
                    });
                    for (l = 0; l < n; l++) d = A[l], m = x.createTween(d, u ? f[d] : 0), t[d] = f[d] || j.style(c, d), d in f || (f[d] = m.start, u && (m.end = m.start, m.start = "width" === d || "height" === d ? 1 : 0))
                }
            }
        ],
        ta = {
            "*": [
                function (c, d) {
                    var e, l, n = this.createTween(c, d),
                        f = Pd.exec(d),
                        m = n.cur(),
                        s = +m || 0,
                        p = 1,
                        x = 20;
                    if (f) {
                        e = +f[2];
                        l = f[3] || (j.cssNumber[c] ? "" : "px");
                        if ("px" !== l && s) {
                            s = j.css(n.elem, c, !0) || e || 1;
                            do p = p || ".5", s /= p, j.style(n.elem, c, s + l); while (p !== (p = n.cur() / m) && 1 !== p && --x)
                        }
                        n.unit = l;
                        n.start = s;
                        n.end = f[1] ? s + (f[1] + 1) * e : e
                    }
                    return n
                }
            ]
        };
    j.Animation = j.extend(Cb, {
        tweener: function (c, d) {
            j.isFunction(c) ? (d = c, c = ["*"]) : c = c.split(" ");
            for (var e, l = 0, n = c.length; l < n; l++) e = c[l], ta[e] = ta[e] || [], ta[e].unshift(d)
        },
        prefilter: function (c, d) {
            d ? Ba.unshift(c) : Ba.push(c)
        }
    });
    j.Tween = R;
    R.prototype = {
        constructor: R,
        init: function (c, d, e, l, n, f) {
            this.elem = c;
            this.prop = e;
            this.easing = n || "swing";
            this.options = d;
            this.start = this.now = this.cur();
            this.end = l;
            this.unit = f || (j.cssNumber[e] ? "" : "px")
        },
        cur: function () {
            var c = R.propHooks[this.prop];
            return c && c.get ? c.get(this) : R.propHooks._default.get(this)
        },
        run: function (c) {
            var d, e = R.propHooks[this.prop];
            return this.options.duration ? this.pos = d = j.easing[this.easing](c, this.options.duration * c, 0, 1, this.options.duration) : this.pos = d = c, this.now = (this.end - this.start) * d + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : R.propHooks._default.set(this), this
        }
    };
    R.prototype.init.prototype = R.prototype;
    R.propHooks = {
        _default: {
            get: function (c) {
                var d;
                return null == c.elem[c.prop] || c.elem.style && null != c.elem.style[c.prop] ? (d = j.css(c.elem, c.prop, !1, ""), !d || "auto" === d ? 0 : d) : c.elem[c.prop]
            },
            set: function (c) {
                j.fx.step[c.prop] ? j.fx.step[c.prop](c) : c.elem.style && (null != c.elem.style[j.cssProps[c.prop]] || j.cssHooks[c.prop]) ? j.style(c.elem, c.prop, c.now + c.unit) : c.elem[c.prop] = c.now
            }
        }
    };
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (c) {
            c.elem.nodeType && c.elem.parentNode && (c.elem[c.prop] = c.now)
        }
    };
    j.each(["toggle", "show", "hide"], function (c, d) {
        var e = j.fn[d];
        j.fn[d] = function (l, n, f) {
            return null == l || "boolean" == typeof l || !c && j.isFunction(l) && j.isFunction(n) ? e.apply(this, arguments) : this.animate(Ca(d, !0), l, n, f)
        }
    });
    j.fn.extend({
        fadeTo: function (c, d, e, l) {
            return this.filter(G).css("opacity", 0).show().end().animate({
                opacity: d
            }, c, e, l)
        },
        animate: function (c, d, e, l) {
            var n = j.isEmptyObject(c),
                f = j.speed(d, e, l);
            d = function () {
                var d = Cb(this, j.extend({}, c), f);
                n && d.stop(!0)
            };
            return n || !1 === f.queue ? this.each(d) : this.queue(f.queue, d)
        },
        stop: function (c, e, l) {
            var n = function (c) {
                var d = c.stop;
                delete c.stop;
                d(l)
            };
            return "string" != typeof c && (l = e, e = c, c = d), e && !1 !== c && this.queue(c || "fx", []), this.each(function () {
                var d = !0,
                    e = null != c && c + "queueHooks",
                    f = j.timers,
                    m = j._data(this);
                if (e) m[e] && m[e].stop && n(m[e]);
                else
                    for (e in m) m[e] && m[e].stop && Qd.test(e) && n(m[e]);
                for (e = f.length; e--;) f[e].elem === this && (null == c || f[e].queue === c) && (f[e].anim.stop(l), d = !1, f.splice(e, 1));
                (d || !l) && j.dequeue(this, c)
            })
        }
    });
    j.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (c, d) {
        j.fn[c] = function (c, e, l) {
            return this.animate(d, c, e, l)
        }
    });
    j.speed = function (c, d, e) {
        var l = c && "object" == typeof c ? j.extend({}, c) : {
            complete: e || !e && d || j.isFunction(c) && c,
            duration: c,
            easing: e && d || d && !j.isFunction(d) && d
        };
        l.duration = j.fx.off ? 0 : "number" == typeof l.duration ? l.duration : l.duration in j.fx.speeds ? j.fx.speeds[l.duration] : j.fx.speeds._default;
        if (null == l.queue || !0 === l.queue) l.queue = "fx";
        return l.old = l.complete, l.complete = function () {
            j.isFunction(l.old) && l.old.call(this);
            l.queue && j.dequeue(this, l.queue)
        }, l
    };
    j.easing = {
        linear: function (c) {
            return c
        },
        swing: function (c) {
            return 0.5 - Math.cos(c * Math.PI) / 2
        }
    };
    j.timers = [];
    j.fx = R.prototype.init;
    j.fx.tick = function () {
        for (var c, d = j.timers,
            e = 0; e < d.length; e++) c = d[e], !c() && d[e] === c && d.splice(e--, 1);
        d.length || j.fx.stop()
    };
    j.fx.timer = function (c) {
        c() && j.timers.push(c) && !Wa && (Wa = setInterval(j.fx.tick, j.fx.interval))
    };
    j.fx.interval = 13;
    j.fx.stop = function () {
        clearInterval(Wa);
        Wa = null
    };
    j.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    j.fx.step = {};
    j.expr && j.expr.filters && (j.expr.filters.animated = function (c) {
        return j.grep(j.timers, function (d) {
            return c === d.elem
        }).length
    });
    var sc = /^(?:body|html)$/i;
    j.fn.offset = function (c) {
        if (arguments.length) return c === d ? this : this.each(function (d) {
            j.offset.setOffset(this, c, d)
        });
        var e, l, n, f, m, s, p, x = {
            top: 0,
            left: 0
        },
            y = this[0],
            t = y && y.ownerDocument;
        if (t) return (l = t.body) === y ? j.offset.bodyOffset(y) : (e = t.documentElement, j.contains(e, y) ? ("undefined" != typeof y.getBoundingClientRect && (x = y.getBoundingClientRect()), n = Db(t), f = e.clientTop || l.clientTop || 0, m = e.clientLeft || l.clientLeft || 0, s = n.pageYOffset || e.scrollTop, p = n.pageXOffset || e.scrollLeft, {
            top: x.top + s - f,
            left: x.left + p - m
        }) : x)
    };
    j.offset = {
        bodyOffset: function (c) {
            var d = c.offsetTop,
                e = c.offsetLeft;
            return j.support.doesNotIncludeMarginInBodyOffset && (d += parseFloat(j.css(c, "marginTop")) || 0, e += parseFloat(j.css(c, "marginLeft")) || 0), {
                top: d,
                left: e
            }
        },
        setOffset: function (c, d, e) {
            var l = j.css(c, "position");
            "static" === l && (c.style.position = "relative");
            var n = j(c),
                f = n.offset(),
                m = j.css(c, "top"),
                s = j.css(c, "left"),
                p = {},
                x = {},
                y, t;
            ("absolute" === l || "fixed" === l) && -1 < j.inArray("auto", [m, s]) ? (x = n.position(), y = x.top, t = x.left) : (y = parseFloat(m) || 0, t = parseFloat(s) || 0);
            j.isFunction(d) && (d = d.call(c, e, f));
            null != d.top && (p.top = d.top - f.top + y);
            null != d.left && (p.left = d.left - f.left + t);
            "using" in d ? d.using.call(c, p) : n.css(p)
        }
    };
    j.fn.extend({
        position: function () {
            if (this[0]) {
                var c = this[0],
                    d = this.offsetParent(),
                    e = this.offset(),
                    l = sc.test(d[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : d.offset();
                return e.top -= parseFloat(j.css(c, "marginTop")) || 0, e.left -= parseFloat(j.css(c, "marginLeft")) || 0, l.top += parseFloat(j.css(d[0], "borderTopWidth")) || 0, l.left += parseFloat(j.css(d[0], "borderLeftWidth")) || 0, {
                    top: e.top - l.top,
                    left: e.left - l.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var c = this.offsetParent || C.body; c && !sc.test(c.nodeName) && "static" === j.css(c, "position");) c = c.offsetParent;
                return c || C.body
            })
        }
    });
    j.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (c, e) {
        var l = /Y/.test(e);
        j.fn[c] = function (n) {
            return j.access(this, function (c, n, f) {
                var m = Db(c);
                if (f === d) return m ? e in m ? m[e] : m.document.documentElement[n] : c[n];
                m ? m.scrollTo(l ? j(m).scrollLeft() : f, l ? f : j(m).scrollTop()) : c[n] = f
            }, c, n, arguments.length, null)
        }
    });
    j.each({
        Height: "height",
        Width: "width"
    }, function (c, e) {
        j.each({
            padding: "inner" +
                c,
            content: e,
            "": "outer" + c
        }, function (l, n) {
            j.fn[n] = function (n, f) {
                var m = arguments.length && (l || "boolean" != typeof n),
                    s = l || (!0 === n || !0 === f ? "margin" : "border");
                return j.access(this, function (e, l, n) {
                    var f;
                    return j.isWindow(e) ? e.document.documentElement["client" + c] : 9 === e.nodeType ? (f = e.documentElement, Math.max(e.body["scroll" + c], f["scroll" + c], e.body["offset" + c], f["offset" + c], f["client" + c])) : n === d ? j.css(e, l, n, s) : j.style(e, l, n, s)
                }, e, m ? n : d, m, null)
            }
        })
    });
    c.jQuery = c.$ = j;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return j
    })
})(window);

function getInternetExplorerVersion() {
    var c = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (c = parseFloat(RegExp.$1));
    return c
}
var ie = getInternetExplorerVersion();

function getQueryVariable(c) {
    for (var d = window.location.search.substring(1).split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]) == c) return decodeURIComponent(f[1])
    }
}
this.jukebox = {};
jukebox.Player = function (c, d) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = d || null;
    this.settings = {};
    for (var e in this.defaults) this.settings[e] = this.defaults[e];
    if ("[object Object]" === Object.prototype.toString.call(c))
        for (var f in c) this.settings[f] = c[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function () {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function () {
        var c = this,
            d = this.settings,
            e = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (e = jukebox.Manager.features);
        if (!0 === e.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var m = function (d) {
                    c.__addToManager(d)
                };
                this.context.addEventListener("canplaythrough", m, !0);
                window.setTimeout(function () {
                    c.context.removeEventListener("canplaythrough", m, !0);
                    m("timeout")
                }, d.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < e.channels ? !0 === d.autoplay ? this.context.autoplay = !0 : void 0 !== d.spritemap[d.autoplay] && this.play(d.autoplay) : 1 === e.channels && void 0 !== d.spritemap[d.autoplay] && (this.backgroundMusic = d.spritemap[d.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(d.autoplay));
            1 == e.channels && !0 !== d.canPlayBackground && (window.addEventListener("pagehide", function () {
                null !== c.isPlaying && (c.pause(), c.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function () {
                c.__wasAutoPaused && (c.resume(), delete c._wasAutoPaused)
            }))
        } else if (!0 === e.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            e = ["id=jukebox-flashstream-" + this.id, "autoplay=" + d.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(e);
            !0 === d.autoplay ? this.play(0) : d.spritemap[d.autoplay] && this.play(d.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function (c) {
        var d, e = this.settings.flashMediaElement,
            f, m = {
                flashvars: c.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            d = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(d);
            var p = document.createElement("object");
            p.id = "jukebox-flashstream-" + this.id;
            p.setAttribute("type", "application/x-shockwave-flash");
            p.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            p.setAttribute("width", "0");
            p.setAttribute("height", "0");
            m.movie = e + "?x=" + (Date.now ? Date.now() : +new Date);
            m.flashvars = c.join("&amp;");
            for (f in m) c = document.createElement("param"), c.setAttribute("name", f), c.setAttribute("value", m[f]), p.appendChild(c);
            d.outerHTML = p.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            d = document.createElement("embed");
            d.id = "jukebox-flashstream-" + this.id;
            d.setAttribute("type", "application/x-shockwave-flash");
            d.setAttribute("width", "100");
            d.setAttribute("height", "100");
            m.play = !1;
            m.loop = !1;
            m.src = e + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in m) d.setAttribute(f, m[f]);
            document.getElementsByTagName("body")[0].appendChild(d);
            this.context = d
        }
    },
    backgroundHackForiOS: function () {
        if (void 0 !== this.backgroundMusic) {
            var c = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = c, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (c - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function (c, d) {
        if (null !== this.isPlaying && !0 !== d) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(c, this.id);
        else {
            var e = this.settings.spritemap,
                f;
            if (void 0 !== e[c]) f = e[c].start;
            else if ("number" === typeof c) {
                f = c;
                for (var m in e)
                    if (f >= e[m].start && f <=
                        e[m].end) {
                        c = m;
                        break
                    }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(e[c]) && (this.isPlaying = this.settings.spritemap[c], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function () {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function () {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function (c) {
        c = "number" === typeof c ? c : this.__lastPosition;
        if (null !== c) return this.play(c), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function () {
            return this.context.volume || 1
        },
        setVolume: function (c) {
            this.context.volume = c;
            return 1E-4 > Math.abs(this.context.volume - c) ? !0 : !1
        },
        getCurrentTime: function () {
            return this.context.currentTime || 0
        },
        setCurrentTime: function (c) {
            try {
                return this.context.currentTime = c, !0
            } catch (d) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function () {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function (c) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(c), !0) : !1
        },
        getCurrentTime: function () {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function (c) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(c) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function (c) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(c))
        for (var e in c) this.settings[e] = c[e];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function () {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function () {
        var c = window.Audio && new Audio;
        if (c && c.canPlayType && !1 === this.settings.useFlash) {
            for (var d = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            }, {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            }, {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            }, {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            }, {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            }, {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            }, {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            }, {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            }, {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            }, {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            }, {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], e, f, m = 0, p = d.length; m < p; m++)
                if (f = d[m].e, d[m].m.length && "object" === typeof d[m].m)
                    for (var u = 0, t = d[m].m.length; u < t; u++)
                        if (e = d[m].m[u], "" !== c.canPlayType(e)) {
                            this.codecs[f] = e;
                            break
                        } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            c.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(c.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (l) { } !0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function (c) {
        return this.__players && void 0 !== this.__players[c] ? this.__players[c] : null
    },
    __getClone: function (c, d) {
        for (var e in this.__clones) {
            var f = this.__clones[e];
            if (null === f.isPlaying && f.origin === c) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(d)) {
            e = {};
            for (var m in d) e[m] = d[m];
            e.autoplay = !1;
            m = new jukebox.Player(e, c);
            m.isClone = !0;
            m.wasReady = !1;
            return this.__clones[m.id] = m
        }
        return null
    },
    loop: function () {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var c = this.__queue[0],
                    d = this.__getPlayerById(c.origin);
                if (null !== d) {
                    var e = this.__getClone(c.origin, d.settings);
                    null !== e && (!0 === this.features.volume && (d = this.__players[c.origin]) && e.setVolume(d.getVolume()), this.add(e), e.play(c.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (e in this.__queue.length && 1 === this.features.channels && (c = this.__queue[0], d = this.__getPlayerById(c.origin), null !== d && d.play(c.pointer, !0), this.__queue.splice(0, 1)), this.__players) c = this.__players[e], d = c.getCurrentTime() || 0, c.isPlaying && !1 === c.wasReady ? c.wasReady = c.setCurrentTime(c.isPlaying.start) : c.isPlaying && !0 === c.wasReady ? d > c.isPlaying.end && (!0 === c.isPlaying.loop ? c.play(c.isPlaying.start, !0) : c.stop()) : c.isClone && null === c.isPlaying ? this.remove(c) : void 0 !== c.backgroundMusic && null === c.isPlaying && d > c.backgroundMusic.end && c.backgroundHackForiOS()
    },
    getPlayableResource: function (c) {
        "[object Array]" !== Object.prototype.toString.call(c) && (c = [c]);
        for (var d = 0, e = c.length; d < e; d++) {
            var f = c[d],
                m = f.match(/\.([^\.]*)$/)[1];
            if (m && this.codecs[m]) return f
        }
        return null
    },
    add: function (c) {
        return c instanceof jukebox.Player && void 0 === this.__players[c.id] ? (this.__playersLength++, this.__players[c.id] = c, !0) : !1
    },
    remove: function (c) {
        return c instanceof jukebox.Player && void 0 !== this.__players[c.id] ? (this.__playersLength--, delete this.__players[c.id], !0) : !1
    },
    addToQueue: function (c, d) {
        return ("string" === typeof c || "number" === typeof c) && void 0 !== this.__players[d] ? (this.__queue.push({
            pointer: c,
            origin: d
        }), !0) : !1
    }
};
(function () {
    var c = function () {
        this.init()
    };
    c.prototype = {
        init: function () {
            var c = this || d;
            c._codecs = {};
            c._howls = [];
            c._muted = !1;
            c._volume = 1;
            c._canPlayEvent = "canplaythrough";
            c._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            c.masterGain = null;
            c.noAudio = !1;
            c.usingWebAudio = !0;
            c.autoSuspend = !0;
            c.ctx = null;
            c.mobileAutoEnable = !0;
            c._setup();
            return c
        },
        volume: function (c) {
            var e = this || d;
            c = parseFloat(c);
            e.ctx || t();
            if ("undefined" !== typeof c && 0 <= c && 1 >= c) {
                e._volume = c;
                if (e._muted) return e;
                e.usingWebAudio && (e.masterGain.gain.value = c);
                for (var f = 0; f < e._howls.length; f++)
                    if (!e._howls[f]._webAudio)
                        for (var m = e._howls[f]._getSoundIds(), p = 0; p < m.length; p++) {
                            var A = e._howls[f]._soundById(m[p]);
                            A && A._node && (A._node.volume = A._volume * c)
                        }
                return e
            }
            return e._volume
        },
        mute: function (c) {
            var e = this || d;
            e.ctx || t();
            e._muted = c;
            e.usingWebAudio && (e.masterGain.gain.value = c ? 0 : e._volume);
            for (var f = 0; f < e._howls.length; f++)
                if (!e._howls[f]._webAudio)
                    for (var m = e._howls[f]._getSoundIds(), p = 0; p < m.length; p++) {
                        var A = e._howls[f]._soundById(m[p]);
                        A && A._node && (A._node.muted = c ? !0 : A._muted)
                    }
            return e
        },
        unload: function () {
            for (var c = this || d, e = c._howls.length - 1; 0 <= e; e--) c._howls[e].unload();
            c.usingWebAudio && c.ctx && "undefined" !== typeof c.ctx.close && (c.ctx.close(), c.ctx = null, t());
            return c
        },
        codecs: function (c) {
            return (this || d)._codecs[c.replace(/^x-/, "")]
        },
        _setup: function () {
            var c = this || d;
            c.state = c.ctx ? c.ctx.state || "running" : "running";
            c._autoSuspend();
            if (!c.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var e = new Audio;
                    "undefined" === typeof e.oncanplaythrough && (c._canPlayEvent = "canplay")
                } catch (f) {
                    c.noAudio = !0
                } else c.noAudio = !0;
            try {
                e = new Audio, e.muted && (c.noAudio = !0)
            } catch (m) { }
            c.noAudio || c._setupCodecs();
            return c
        },
        _setupCodecs: function () {
            var c = this || d,
                e = null;
            try {
                e = "undefined" !== typeof Audio ? new Audio : null
            } catch (f) {
                return c
            }
            if (!e || "function" !== typeof e.canPlayType) return c;
            var m = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                p = c._navigator && c._navigator.userAgent.match(/OPR\/([0-6].)/g),
                p = p && 33 > parseInt(p[0].split("/")[1], 10);
            c._codecs = {
                mp3: !(p || !m && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!m,
                opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(e.canPlayType("audio/x-flac;") || e.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return c
        },
        _enableMobileAudio: function () {
            var c = this || d,
                e = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(c._navigator && c._navigator.userAgent),
                f = !!("ontouchend" in window || c._navigator && 0 < c._navigator.maxTouchPoints || c._navigator && 0 < c._navigator.msMaxTouchPoints);
            if (!c._mobileEnabled && c.ctx && (e || f)) {
                c._mobileEnabled = !1;
                !c._mobileUnloaded && 44100 !== c.ctx.sampleRate && (c._mobileUnloaded = !0, c.unload());
                c._scratchBuffer = c.ctx.createBuffer(1, 1, 22050);
                var m = function () {
                    var d = c.ctx.createBufferSource();
                    d.buffer = c._scratchBuffer;
                    d.connect(c.ctx.destination);
                    "undefined" === typeof d.start ? d.noteOn(0) : d.start(0);
                    d.onended = function () {
                        d.disconnect(0);
                        c._mobileEnabled = !0;
                        c.mobileAutoEnable = !1;
                        document.removeEventListener("touchend", m, !0)
                    }
                };
                document.addEventListener("touchend", m, !0);
                return c
            }
        },
        _autoSuspend: function () {
            var c = this;
            if (c.autoSuspend && c.ctx && "undefined" !== typeof c.ctx.suspend && d.usingWebAudio) {
                for (var e = 0; e < c._howls.length; e++)
                    if (c._howls[e]._webAudio)
                        for (var f = 0; f < c._howls[e]._sounds.length; f++)
                            if (!c._howls[e]._sounds[f]._paused) return c;
                c._suspendTimer && clearTimeout(c._suspendTimer);
                c._suspendTimer = setTimeout(function () {
                    c.autoSuspend && (c._suspendTimer = null, c.state = "suspending", c.ctx.suspend().then(function () {
                        c.state = "suspended";
                        c._resumeAfterSuspend && (delete c._resumeAfterSuspend, c._autoResume())
                    }))
                }, 3E4);
                return c
            }
        },
        _autoResume: function () {
            var c = this;
            if (c.ctx && "undefined" !== typeof c.ctx.resume && d.usingWebAudio) return "running" === c.state && c._suspendTimer ? (clearTimeout(c._suspendTimer), c._suspendTimer = null) : "suspended" === c.state ? (c.state = "resuming", c.ctx.resume().then(function () {
                c.state = "running";
                for (var d = 0; d < c._howls.length; d++) c._howls[d]._emit("resume")
            }), c._suspendTimer && (clearTimeout(c._suspendTimer), c._suspendTimer = null)) : "suspending" === c.state && (c._resumeAfterSuspend = !0), c
        }
    };
    var d = new c,
        e = function (c) {
            !c.src || 0 === c.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(c)
        };
    e.prototype = {
        init: function (c) {
            var e = this;
            d.ctx || t();
            e._autoplay = c.autoplay || !1;
            e._format = "string" !== typeof c.format ? c.format : [c.format];
            e._html5 = c.html5 || !1;
            e._muted = c.mute || !1;
            e._loop = c.loop || !1;
            e._pool = c.pool || 5;
            e._preload = "boolean" === typeof c.preload ? c.preload : !0;
            e._rate = c.rate || 1;
            e._sprite = c.sprite || {};
            e._src = "string" !== typeof c.src ? c.src : [c.src];
            e._volume = void 0 !== c.volume ? c.volume : 1;
            e._duration = 0;
            e._state = "unloaded";
            e._sounds = [];
            e._endTimers = {};
            e._queue = [];
            e._onend = c.onend ? [{
                fn: c.onend
            }] : [];
            e._onfade = c.onfade ? [{
                fn: c.onfade
            }] : [];
            e._onload = c.onload ? [{
                fn: c.onload
            }] : [];
            e._onloaderror = c.onloaderror ? [{
                fn: c.onloaderror
            }] : [];
            e._onpause = c.onpause ? [{
                fn: c.onpause
            }] : [];
            e._onplay = c.onplay ? [{
                fn: c.onplay
            }] : [];
            e._onstop = c.onstop ? [{
                fn: c.onstop
            }] : [];
            e._onmute = c.onmute ? [{
                fn: c.onmute
            }] : [];
            e._onvolume = c.onvolume ? [{
                fn: c.onvolume
            }] : [];
            e._onrate = c.onrate ? [{
                fn: c.onrate
            }] : [];
            e._onseek = c.onseek ? [{
                fn: c.onseek
            }] : [];
            e._onresume = [];
            e._webAudio = d.usingWebAudio && !e._html5;
            "undefined" !== typeof d.ctx && d.ctx && d.mobileAutoEnable && d._enableMobileAudio();
            d._howls.push(e);
            e._autoplay && e._queue.push({
                event: "play",
                action: function () {
                    e.play()
                }
            });
            e._preload && e.load();
            return e
        },
        load: function () {
            var c = null;
            if (d.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var e = 0; e < this._src.length; e++) {
                    var s, x;
                    if (this._format && this._format[e]) s = this._format[e];
                    else {
                        x = this._src[e];
                        if ("string" !== typeof x) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        } (s = /^data:audio\/([^;,]+);/i.exec(x)) || (s = /\.([^.]+)$/.exec(x.split("?", 1)[0]));
                        s && (s = s[1].toLowerCase())
                    } if (d.codecs(s)) {
                        c = this._src[e];
                        break
                    }
                }
                if (c) {
                    this._src = c;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === c.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new f(this);
                    if (this._webAudio) {
                        var y = this,
                            t = y._src;
                        if (m[t]) y._duration = m[t].duration, u(y);
                        else if (/^data:[^;]+;base64,/.test(t)) {
                            c = atob(t.split(",")[1]);
                            e = new Uint8Array(c.length);
                            for (s = 0; s < c.length; ++s) e[s] = c.charCodeAt(s);
                            p(e.buffer, y)
                        } else {
                            var D = new XMLHttpRequest;
                            D.open("GET", t, !0);
                            D.responseType = "arraybuffer";
                            D.onload = function () {
                                var c = (D.status + "")[0];
                                "0" !== c && "2" !== c && "3" !== c ? y._emit("loaderror", null, "Failed loading audio file with status: " +
                                    D.status + ".") : p(D.response, y)
                            };
                            D.onerror = function () {
                                y._webAudio && (y._html5 = !0, y._webAudio = !1, y._sounds = [], delete m[t], y.load())
                            };
                            try {
                                D.send()
                            } catch (G) {
                                D.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function (c, e) {
            var f = this,
                m = null;
            if ("number" === typeof c) m = c, c = null;
            else {
                if ("string" === typeof c && "loaded" === f._state && !f._sprite[c]) return null;
                if ("undefined" === typeof c) {
                    c = "__default";
                    for (var p = 0, t = 0; t < f._sounds.length; t++) f._sounds[t]._paused && !f._sounds[t]._ended && (p++, m = f._sounds[t]._id);
                    1 === p ? c = null : m = null
                }
            }
            var u = m ? f._soundById(m) : f._inactiveSound();
            if (!u) return null;
            m && !c && (c = u._sprite || "__default");
            if ("loaded" !== f._state && !f._sprite[c]) return f._queue.push({
                event: "play",
                action: function () {
                    f.play(f._soundById(u._id) ? u._id : void 0)
                }
            }), u._id;
            if (m && !u._paused) return e || setTimeout(function () {
                f._emit("play", u._id)
            }, 0), u._id;
            f._webAudio && d._autoResume();
            var G = Math.max(0, 0 < u._seek ? u._seek : f._sprite[c][0] / 1E3),
                J = Math.max(0, (f._sprite[c][0] + f._sprite[c][1]) /
                    1E3 - G),
                F = 1E3 * J / Math.abs(u._rate);
            u._paused = !1;
            u._ended = !1;
            u._sprite = c;
            u._seek = G;
            u._start = f._sprite[c][0] / 1E3;
            u._stop = (f._sprite[c][0] + f._sprite[c][1]) / 1E3;
            u._loop = !(!u._loop && !f._sprite[c][2]);
            var H = u._node;
            if (f._webAudio) m = function () {
                f._refreshBuffer(u);
                H.gain.setValueAtTime(u._muted || f._muted ? 0 : u._volume, d.ctx.currentTime);
                u._playStart = d.ctx.currentTime;
                "undefined" === typeof H.bufferSource.start ? u._loop ? H.bufferSource.noteGrainOn(0, G, 86400) : H.bufferSource.noteGrainOn(0, G, J) : u._loop ? H.bufferSource.start(0,
                    G, 86400) : H.bufferSource.start(0, G, J);
                Infinity !== F && (f._endTimers[u._id] = setTimeout(f._ended.bind(f, u), F));
                e || setTimeout(function () {
                    f._emit("play", u._id)
                }, 0)
            }, p = "running" === d.state, "loaded" === f._state && p ? m() : (f.once(p ? "load" : "resume", m, p ? u._id : null), f._clearTimer(u._id));
            else {
                var ba = function () {
                    H.currentTime = G;
                    H.muted = u._muted || f._muted || d._muted || H.muted;
                    H.volume = u._volume * d.volume();
                    H.playbackRate = u._rate;
                    setTimeout(function () {
                        H.play();
                        Infinity !== F && (f._endTimers[u._id] = setTimeout(f._ended.bind(f, u), F));
                        e || f._emit("play", u._id)
                    }, 0)
                },
                    m = "loaded" === f._state && (window && window.ejecta || !H.readyState && d._navigator.isCocoonJS);
                if (4 === H.readyState || m) ba();
                else {
                    var fa = function () {
                        ba();
                        H.removeEventListener(d._canPlayEvent, fa, !1)
                    };
                    H.addEventListener(d._canPlayEvent, fa, !1);
                    f._clearTimer(u._id)
                }
            }
            return u._id
        },
        pause: function (c, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "pause",
                action: function () {
                    e.pause(c)
                }
            }), e;
            for (var f = e._getSoundIds(c), m = 0; m < f.length; m++) {
                e._clearTimer(f[m]);
                var p = e._soundById(f[m]);
                if (p && !p._paused && (p._seek = e.seek(f[m]), p._rateSeek = 0, p._paused = !0, e._stopFade(f[m]), p._node))
                    if (e._webAudio) {
                        if (!p._node.bufferSource) break;
                        "undefined" === typeof p._node.bufferSource.stop ? p._node.bufferSource.noteOff(0) : p._node.bufferSource.stop(0);
                        e._cleanBuffer(p._node)
                    } else (!isNaN(p._node.duration) || Infinity === p._node.duration) && p._node.pause();
                d || e._emit("pause", p ? p._id : null)
            }
            return e
        },
        stop: function (c, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "stop",
                action: function () {
                    e.stop(c)
                }
            }), e;
            for (var f = e._getSoundIds(c), m = 0; m < f.length; m++) {
                e._clearTimer(f[m]);
                var p = e._soundById(f[m]);
                if (p && (p._seek = p._start || 0, p._rateSeek = 0, p._paused = !0, p._ended = !0, e._stopFade(f[m]), p._node))
                    if (e._webAudio) {
                        if (!p._node.bufferSource) {
                            d || e._emit("stop", p._id);
                            break
                        }
                        "undefined" === typeof p._node.bufferSource.stop ? p._node.bufferSource.noteOff(0) : p._node.bufferSource.stop(0);
                        e._cleanBuffer(p._node)
                    } else if (!isNaN(p._node.duration) || Infinity === p._node.duration) p._node.currentTime = p._start || 0, p._node.pause();
                p && !d && e._emit("stop", p._id)
            }
            return e
        },
        mute: function (c, e) {
            var f = this;
            if ("loaded" !== f._state) return f._queue.push({
                event: "mute",
                action: function () {
                    f.mute(c, e)
                }
            }), f;
            if ("undefined" === typeof e)
                if ("boolean" === typeof c) f._muted = c;
                else return f._muted;
            for (var m = f._getSoundIds(e), p = 0; p < m.length; p++) {
                var t = f._soundById(m[p]);
                t && (t._muted = c, f._webAudio && t._node ? t._node.gain.setValueAtTime(c ? 0 : t._volume, d.ctx.currentTime) : t._node && (t._node.muted = d._muted ? !0 : c), f._emit("mute", t._id))
            }
            return f
        },
        volume: function () {
            var c = this,
                e = arguments,
                f, m;
            if (0 === e.length) return c._volume;
            1 === e.length || 2 === e.length && "undefined" === typeof e[1] ? 0 <= c._getSoundIds().indexOf(e[0]) ? m = parseInt(e[0], 10) : f = parseFloat(e[0]) : 2 <= e.length && (f = parseFloat(e[0]), m = parseInt(e[1], 10));
            var p;
            if ("undefined" !== typeof f && 0 <= f && 1 >= f) {
                if ("loaded" !== c._state) return c._queue.push({
                    event: "volume",
                    action: function () {
                        c.volume.apply(c, e)
                    }
                }), c;
                "undefined" === typeof m && (c._volume = f);
                m = c._getSoundIds(m);
                for (var t = 0; t < m.length; t++)
                    if (p = c._soundById(m[t])) p._volume = f, e[2] || c._stopFade(m[t]), c._webAudio && p._node && !p._muted ? p._node.gain.setValueAtTime(f, d.ctx.currentTime) : p._node && !p._muted && (p._node.volume = f * d.volume()), c._emit("volume", p._id)
            } else return (p = m ? c._soundById(m) : c._sounds[0]) ? p._volume : 0;
            return c
        },
        fade: function (c, e, f, m) {
            var p = this,
                t = Math.abs(c - e),
                u = c > e ? "out" : "in",
                G = t / 0.01,
                t = 0 < G ? f / G : f;
            4 > t && (G = Math.ceil(G / (4 / t)), t = 4);
            if ("loaded" !== p._state) return p._queue.push({
                event: "fade",
                action: function () {
                    p.fade(c, e, f, m)
                }
            }), p;
            p.volume(c, m);
            for (var J = p._getSoundIds(m), F = 0; F < J.length; F++) {
                var H = p._soundById(J[F]);
                if (H) {
                    m || p._stopFade(J[F]);
                    if (p._webAudio && !H._muted) {
                        var ba = d.ctx.currentTime,
                            fa = ba + f / 1E3;
                        H._volume = c;
                        H._node.gain.setValueAtTime(c, ba);
                        H._node.gain.linearRampToValueAtTime(e, fa)
                    }
                    var K = c;
                    H._interval = setInterval(function (c, d) {
                        0 < G && (K += "in" === u ? 0.01 : -0.01);
                        K = Math.max(0, K);
                        K = Math.min(1, K);
                        K = Math.round(100 * K) / 100;
                        p._webAudio ? ("undefined" === typeof m && (p._volume = K), d._volume = K) : p.volume(K, c, !0);
                        K === e && (clearInterval(d._interval), d._interval = null, p.volume(K,
                            c), p._emit("fade", c))
                    }.bind(p, J[F], H), t)
                }
            }
            return p
        },
        _stopFade: function (c) {
            var e = this._soundById(c);
            e && e._interval && (this._webAudio && e._node.gain.cancelScheduledValues(d.ctx.currentTime), clearInterval(e._interval), e._interval = null, this._emit("fade", c));
            return this
        },
        loop: function () {
            var c = arguments,
                d, e;
            if (0 === c.length) return this._loop;
            if (1 === c.length)
                if ("boolean" === typeof c[0]) this._loop = d = c[0];
                else return (c = this._soundById(parseInt(c[0], 10))) ? c._loop : !1;
            else 2 === c.length && (d = c[0], e = parseInt(c[1], 10));
            e = this._getSoundIds(e);
            for (var f = 0; f < e.length; f++)
                if (c = this._soundById(e[f]))
                    if (c._loop = d, this._webAudio && c._node && c._node.bufferSource && (c._node.bufferSource.loop = d)) c._node.bufferSource.loopStart = c._start || 0, c._node.bufferSource.loopEnd = c._stop;
            return this
        },
        rate: function () {
            var c = this,
                e = arguments,
                f, m;
            0 === e.length ? m = c._sounds[0]._id : 1 === e.length ? 0 <= c._getSoundIds().indexOf(e[0]) ? m = parseInt(e[0], 10) : f = parseFloat(e[0]) : 2 === e.length && (f = parseFloat(e[0]), m = parseInt(e[1], 10));
            var p;
            if ("number" === typeof f) {
                if ("loaded" !== c._state) return c._queue.push({
                    event: "rate",
                    action: function () {
                        c.rate.apply(c, e)
                    }
                }), c;
                "undefined" === typeof m && (c._rate = f);
                m = c._getSoundIds(m);
                for (var t = 0; t < m.length; t++)
                    if (p = c._soundById(m[t])) {
                        p._rateSeek = c.seek(m[t]);
                        p._playStart = c._webAudio ? d.ctx.currentTime : p._playStart;
                        p._rate = f;
                        c._webAudio && p._node && p._node.bufferSource ? p._node.bufferSource.playbackRate.value = f : p._node && (p._node.playbackRate = f);
                        var u = c.seek(m[t]),
                            u = 1E3 * ((c._sprite[p._sprite][0] + c._sprite[p._sprite][1]) / 1E3 - u) / Math.abs(p._rate);
                        if (c._endTimers[m[t]] || !p._paused) c._clearTimer(m[t]), c._endTimers[m[t]] = setTimeout(c._ended.bind(c, p), u);
                        c._emit("rate", p._id)
                    }
            } else return (p = c._soundById(m)) ? p._rate : c._rate;
            return c
        },
        seek: function () {
            var c = this,
                e = arguments,
                f, m;
            0 === e.length ? m = c._sounds[0]._id : 1 === e.length ? 0 <= c._getSoundIds().indexOf(e[0]) ? m = parseInt(e[0], 10) : (m = c._sounds[0]._id, f = parseFloat(e[0])) : 2 === e.length && (f = parseFloat(e[0]), m = parseInt(e[1], 10));
            if ("undefined" === typeof m) return c;
            if ("loaded" !== c._state) return c._queue.push({
                event: "seek",
                action: function () {
                    c.seek.apply(c, e)
                }
            }), c;
            var p = c._soundById(m);
            if (p)
                if ("number" === typeof f && 0 <= f) {
                    var t = c.playing(m);
                    t && c.pause(m, !0);
                    p._seek = f;
                    p._ended = !1;
                    c._clearTimer(m);
                    t && c.play(m, !0);
                    !c._webAudio && p._node && (p._node.currentTime = f);
                    c._emit("seek", m)
                } else return c._webAudio ? (f = c.playing(m) ? d.ctx.currentTime - p._playStart : 0, p._seek + ((p._rateSeek ? p._rateSeek - p._seek : 0) + f * Math.abs(p._rate))) : p._node.currentTime;
            return c
        },
        playing: function (c) {
            if ("number" === typeof c) return (c = this._soundById(c)) ? !c._paused : !1;
            for (c = 0; c < this._sounds.length; c++)
                if (!this._sounds[c]._paused) return !0;
            return !1
        },
        duration: function (c) {
            var d = this._duration;
            (c = this._soundById(c)) && (d = this._sprite[c._sprite][1] / 1E3);
            return d
        },
        state: function () {
            return this._state
        },
        unload: function () {
            for (var c = this._sounds, e = 0; e < c.length; e++) {
                c[e]._paused || (this.stop(c[e]._id), this._emit("end", c[e]._id));
                this._webAudio || (c[e]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", c[e]._node.removeEventListener("error", c[e]._errorFn, !1), c[e]._node.removeEventListener(d._canPlayEvent, c[e]._loadFn, !1));
                delete c[e]._node;
                this._clearTimer(c[e]._id);
                var f = d._howls.indexOf(this);
                0 <= f && d._howls.splice(f, 1)
            }
            c = !0;
            for (e = 0; e < d._howls.length; e++)
                if (d._howls[e]._src === this._src) {
                    c = !1;
                    break
                }
            m && c && delete m[this._src];
            d.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function (c, d, e, f) {
            c = this["_on" + c];
            "function" === typeof d && c.push(f ? {
                id: e,
                fn: d,
                once: f
            } : {
                id: e,
                fn: d
            });
            return this
        },
        off: function (c, d, e) {
            var f = this["_on" +
                c],
                m = 0;
            if (d)
                for (m = 0; m < f.length; m++) {
                    if (d === f[m].fn && e === f[m].id) {
                        f.splice(m, 1);
                        break
                    }
                } else if (c) this["_on" + c] = [];
            else {
                c = Object.keys(this);
                for (m = 0; m < c.length; m++) 0 === c[m].indexOf("_on") && Array.isArray(this[c[m]]) && (this[c[m]] = [])
            }
            return this
        },
        once: function (c, d, e) {
            this.on(c, d, e, 1);
            return this
        },
        _emit: function (c, d, e) {
            for (var f = this["_on" + c], m = f.length - 1; 0 <= m; m--)
                if (!f[m].id || f[m].id === d || "load" === c) setTimeout(function (c) {
                    c.call(this, d, e)
                }.bind(this, f[m].fn), 0), f[m].once && this.off(c, f[m].fn, f[m].id);
            return this
        },
        _loadQueue: function () {
            var c = this;
            if (0 < c._queue.length) {
                var d = c._queue[0];
                c.once(d.event, function () {
                    c._queue.shift();
                    c._loadQueue()
                });
                d.action()
            }
            return c
        },
        _ended: function (c) {
            var e = c._sprite,
                e = !(!c._loop && !this._sprite[e][2]);
            this._emit("end", c._id);
            !this._webAudio && e && this.stop(c._id, !0).play(c._id);
            if (this._webAudio && e) {
                this._emit("play", c._id);
                c._seek = c._start || 0;
                c._rateSeek = 0;
                c._playStart = d.ctx.currentTime;
                var f = 1E3 * (c._stop - c._start) / Math.abs(c._rate);
                this._endTimers[c._id] = setTimeout(this._ended.bind(this,
                    c), f)
            }
            this._webAudio && !e && (c._paused = !0, c._ended = !0, c._seek = c._start || 0, c._rateSeek = 0, this._clearTimer(c._id), this._cleanBuffer(c._node), d._autoSuspend());
            !this._webAudio && !e && this.stop(c._id);
            return this
        },
        _clearTimer: function (c) {
            this._endTimers[c] && (clearTimeout(this._endTimers[c]), delete this._endTimers[c]);
            return this
        },
        _soundById: function (c) {
            for (var d = 0; d < this._sounds.length; d++)
                if (c === this._sounds[d]._id) return this._sounds[d];
            return null
        },
        _inactiveSound: function () {
            this._drain();
            for (var c = 0; c < this._sounds.length; c++)
                if (this._sounds[c]._ended) return this._sounds[c].reset();
            return new f(this)
        },
        _drain: function () {
            var c = this._pool,
                d = 0,
                e = 0;
            if (!(this._sounds.length < c)) {
                for (e = 0; e < this._sounds.length; e++) this._sounds[e]._ended && d++;
                for (e = this._sounds.length - 1; 0 <= e && !(d <= c); e--) this._sounds[e]._ended && (this._webAudio && this._sounds[e]._node && this._sounds[e]._node.disconnect(0), this._sounds.splice(e, 1), d--)
            }
        },
        _getSoundIds: function (c) {
            if ("undefined" === typeof c) {
                c = [];
                for (var d = 0; d < this._sounds.length; d++) c.push(this._sounds[d]._id);
                return c
            }
            return [c]
        },
        _refreshBuffer: function (c) {
            c._node.bufferSource = d.ctx.createBufferSource();
            c._node.bufferSource.buffer = m[this._src];
            c._panner ? c._node.bufferSource.connect(c._panner) : c._node.bufferSource.connect(c._node);
            if (c._node.bufferSource.loop = c._loop) c._node.bufferSource.loopStart = c._start || 0, c._node.bufferSource.loopEnd = c._stop;
            c._node.bufferSource.playbackRate.value = c._rate;
            return this
        },
        _cleanBuffer: function (c) {
            if (this._scratchBuffer) {
                c.bufferSource.onended = null;
                c.bufferSource.disconnect(0);
                try {
                    c.bufferSource.buffer = this._scratchBuffer
                } catch (d) { }
            }
            c.bufferSource = null;
            return this
        }
    };
    var f = function (c) {
        this._parent = c;
        this.init()
    };
    f.prototype = {
        init: function () {
            var c = this._parent;
            this._muted = c._muted;
            this._loop = c._loop;
            this._volume = c._volume;
            this._muted = c._muted;
            this._rate = c._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            c._sounds.push(this);
            this.create();
            return this
        },
        create: function () {
            var c = this._parent,
                e = d._muted || this._muted || this._parent._muted ? 0 : this._volume;
            c._webAudio ? (this._node = "undefined" === typeof d.ctx.createGain ? d.ctx.createGainNode() : d.ctx.createGain(), this._node.gain.setValueAtTime(e, d.ctx.currentTime), this._node.paused = !0, this._node.connect(d.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(d._canPlayEvent, this._loadFn, !1), this._node.src = c._src, this._node.preload = "auto", this._node.volume = e * d.volume(), this._node.load());
            return this
        },
        reset: function () {
            var c = this._parent;
            this._muted = c._muted;
            this._loop = c._loop;
            this._volume = c._volume;
            this._muted = c._muted;
            this._rate = c._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            return this
        },
        _errorListener: function () {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error", this._errorListener, !1)
        },
        _loadListener: function () {
            var c = this._parent;
            c._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(c._sprite).length && (c._sprite = {
                __default: [0, 1E3 * c._duration]
            });
            "loaded" !== c._state && (c._state = "loaded", c._emit("load"), c._loadQueue());
            this._node.removeEventListener(d._canPlayEvent, this._loadFn, !1)
        }
    };
    var m = {},
        p = function (c, e) {
            d.ctx.decodeAudioData(c, function (c) {
                c && 0 < e._sounds.length && (m[e._src] = c, u(e, c))
            }, function () {
                e._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        u = function (c,
            d) {
            d && !c._duration && (c._duration = d.duration);
            0 === Object.keys(c._sprite).length && (c._sprite = {
                __default: [0, 1E3 * c._duration]
            });
            "loaded" !== c._state && (c._state = "loaded", c._emit("load"), c._loadQueue())
        },
        t = function () {
            try {
                "undefined" !== typeof AudioContext ? d.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? d.ctx = new webkitAudioContext : d.usingWebAudio = !1
            } catch (c) {
                d.usingWebAudio = !1
            }
            var e = /iP(hone|od|ad)/.test(d._navigator && d._navigator.platform),
                f = d._navigator && d._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                f = f ? parseInt(f[1], 10) : null;
            if (e && f && 9 > f && (e = /safari/.test(d._navigator && d._navigator.userAgent.toLowerCase()), d._navigator && d._navigator.standalone && !e || d._navigator && !d._navigator.standalone && !e)) d.usingWebAudio = !1;
            d.usingWebAudio && (d.masterGain = "undefined" === typeof d.ctx.createGain ? d.ctx.createGainNode() : d.ctx.createGain(), d.masterGain.gain.value = 1, d.masterGain.connect(d.ctx.destination));
            d._setup()
        };
    "function" === typeof define && define.amd && define([], function () {
        return {
            Howler: d,
            Howl: e
        }
    });
    "undefined" !== typeof exports && (exports.Howler = d, exports.Howl = e);
    "undefined" !== typeof window ? (window.HowlerGlobal = c, window.Howler = d, window.Howl = e, window.Sound = f) : "undefined" !== typeof global && (global.HowlerGlobal = c, global.Howler = d, global.Howl = e, global.Sound = f)
})();
(function () {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function (c) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var d = this._howls.length - 1; 0 <= d; d--) this._howls[d].stereo(c);
        return this
    };
    HowlerGlobal.prototype.pos = function (c, d, e) {
        if (!this.ctx || !this.ctx.listener) return this;
        d = "number" !== typeof d ? this._pos[1] : d;
        e = "number" !== typeof e ? this._pos[2] : e;
        if ("number" === typeof c) this._pos = [c, d, e], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function (c, d, e, f, l, n) {
        if (!this.ctx || !this.ctx.listener) return this;
        var s = this._orientation;
        d = "number" !== typeof d ? s[1] : d;
        e = "number" !== typeof e ? s[2] : e;
        f = "number" !== typeof f ? s[3] : f;
        l = "number" !== typeof l ? s[4] : l;
        n = "number" !== typeof n ? s[5] : n;
        if ("number" === typeof c) this._orientation = [c, d, e, f, l, n], this.ctx.listener.setOrientation(c, d, e, f, l, n);
        else return s;
        return this
    };
    var c = Howl.prototype.init;
    Howl.prototype.init = function (d) {
        this._orientation = d.orientation || [1, 0, 0];
        this._stereo = d.stereo || null;
        this._pos = d.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof d.coneInnerAngle ? d.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof d.coneOuterAngle ? d.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof d.coneOuterGain ? d.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof d.distanceModel ? d.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof d.maxDistance ? d.maxDistance : 1E4,
            panningModel: "undefined" !== typeof d.panningModel ? d.panningModel : "HRTF",
            refDistance: "undefined" !== typeof d.refDistance ? d.refDistance : 1,
            rolloffFactor: "undefined" !== typeof d.rolloffFactor ? d.rolloffFactor : 1
        };
        this._onstereo = d.onstereo ? [{
            fn: d.onstereo
        }] : [];
        this._onpos = d.onpos ? [{
            fn: d.onpos
        }] : [];
        this._onorientation = d.onorientation ? [{
            fn: d.onorientation
        }] : [];
        return c.call(this, d)
    };
    Howl.prototype.stereo = function (c, d) {
        var e = this;
        if (!e._webAudio) return e;
        if ("loaded" !== e._state) return e._queue.push({
            event: "stereo",
            action: function () {
                e.stereo(c, d)
            }
        }), e;
        var t = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof d)
            if ("number" === typeof c) e._stereo = c, e._pos = [c, 0, 0];
            else return e._stereo;
        for (var l = e._getSoundIds(d), n = 0; n < l.length; n++) {
            var s = e._soundById(l[n]);
            if (s)
                if ("number" === typeof c) s._stereo = c, s._pos = [c, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", (!s._panner || !s._panner.pan) && f(s, t), "spatial" === t ? s._panner.setPosition(c, 0, 0) : s._panner.pan.value = c), e._emit("stereo", s._id);
                else return s._stereo
        }
        return e
    };
    Howl.prototype.pos = function (c, d, e, t) {
        var l = this;
        if (!l._webAudio) return l;
        if ("loaded" !== l._state) return l._queue.push({
            event: "pos",
            action: function () {
                l.pos(c, d, e, t)
            }
        }), l;
        d = "number" !== typeof d ? 0 : d;
        e = "number" !== typeof e ? -0.5 : e;
        if ("undefined" === typeof t)
            if ("number" === typeof c) l._pos = [c, d, e];
            else return l._pos;
        for (var n = l._getSoundIds(t), s = 0; s < n.length; s++) {
            var x = l._soundById(n[s]);
            if (x)
                if ("number" === typeof c) x._pos = [c, d, e], x._node && ((!x._panner || x._panner.pan) && f(x, "spatial"), x._panner.setPosition(c, d, e)), l._emit("pos", x._id);
                else return x._pos
        }
        return l
    };
    Howl.prototype.orientation = function (c, d, e, t) {
        var l = this;
        if (!l._webAudio) return l;
        if ("loaded" !== l._state) return l._queue.push({
            event: "orientation",
            action: function () {
                l.orientation(c, d, e, t)
            }
        }), l;
        d = "number" !== typeof d ? l._orientation[1] : d;
        e = "number" !== typeof e ? l._orientation[2] : e;
        if ("undefined" === typeof t)
            if ("number" === typeof c) l._orientation = [c, d, e];
            else return l._orientation;
        for (var n = l._getSoundIds(t), s = 0; s < n.length; s++) {
            var x = l._soundById(n[s]);
            if (x)
                if ("number" === typeof c) x._orientation = [c, d, e], x._node && (x._panner || (x._pos || (x._pos = l._pos || [0, 0, -0.5]), f(x, "spatial")), x._panner.setOrientation(c, d, e)), l._emit("orientation", x._id);
                else return x._orientation
        }
        return l
    };
    Howl.prototype.pannerAttr = function () {
        var c = arguments,
            d, e;
        if (!this._webAudio) return this;
        if (0 === c.length) return this._pannerAttr;
        if (1 === c.length)
            if ("object" === typeof c[0]) d = c[0], "undefined" === typeof e && (this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof d.coneInnerAngle ? d.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof d.coneOuterAngle ? d.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof d.coneOuterGain ? d.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof d.distanceModel ? d.distanceModel : this._distanceModel,
                maxDistance: "undefined" !== typeof d.maxDistance ? d.maxDistance : this._maxDistance,
                panningModel: "undefined" !== typeof d.panningModel ? d.panningModel : this._panningModel,
                refDistance: "undefined" !== typeof d.refDistance ? d.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof d.rolloffFactor ? d.rolloffFactor : this._rolloffFactor
            });
            else return (c = this._soundById(parseInt(c[0], 10))) ? c._pannerAttr : this._pannerAttr;
        else 2 === c.length && (d = c[0], e = parseInt(c[1], 10));
        e = this._getSoundIds(e);
        for (var t = 0; t < e.length; t++)
            if (c = this._soundById(e[t])) {
                var l = c._pannerAttr,
                    l = {
                        coneInnerAngle: "undefined" !== typeof d.coneInnerAngle ? d.coneInnerAngle : l.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof d.coneOuterAngle ? d.coneOuterAngle : l.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof d.coneOuterGain ? d.coneOuterGain : l.coneOuterGain,
                        distanceModel: "undefined" !== typeof d.distanceModel ? d.distanceModel : l.distanceModel,
                        maxDistance: "undefined" !== typeof d.maxDistance ? d.maxDistance : l.maxDistance,
                        panningModel: "undefined" !== typeof d.panningModel ? d.panningModel : l.panningModel,
                        refDistance: "undefined" !== typeof d.refDistance ? d.refDistance : l.refDistance,
                        rolloffFactor: "undefined" !== typeof d.rolloffFactor ? d.rolloffFactor : l.rolloffFactor
                    },
                    n = c._panner;
                n ? (n.coneInnerAngle = l.coneInnerAngle, n.coneOuterAngle = l.coneOuterAngle, n.coneOuterGain = l.coneOuterGain, n.distanceModel = l.distanceModel, n.maxDistance = l.maxDistance, n.panningModel = l.panningModel, n.refDistance = l.refDistance, n.rolloffFactor = l.rolloffFactor) : (c._pos || (c._pos = this._pos || [0, 0, -0.5]), f(c, "spatial"))
            }
        return this
    };
    var d = Sound.prototype.init;
    Sound.prototype.init = function () {
        var c = this._parent;
        this._orientation = c._orientation;
        this._stereo = c._stereo;
        this._pos = c._pos;
        this._pannerAttr = c._pannerAttr;
        d.call(this);
        this._stereo ? c.stereo(this._stereo) : this._pos && c.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var e = Sound.prototype.reset;
    Sound.prototype.reset = function () {
        var c = this._parent;
        this._orientation = c._orientation;
        this._pos = c._pos;
        this._pannerAttr = c._pannerAttr;
        return e.call(this)
    };
    var f = function (c, d) {
        "spatial" === (d || "spatial") ? (c._panner = Howler.ctx.createPanner(), c._panner.coneInnerAngle = c._pannerAttr.coneInnerAngle, c._panner.coneOuterAngle = c._pannerAttr.coneOuterAngle, c._panner.coneOuterGain = c._pannerAttr.coneOuterGain, c._panner.distanceModel = c._pannerAttr.distanceModel, c._panner.maxDistance = c._pannerAttr.maxDistance, c._panner.panningModel = c._pannerAttr.panningModel, c._panner.refDistance = c._pannerAttr.refDistance, c._panner.rolloffFactor = c._pannerAttr.rolloffFactor, c._panner.setPosition(c._pos[0], c._pos[1], c._pos[2]), c._panner.setOrientation(c._orientation[0], c._orientation[1], c._orientation[2])) : (c._panner = Howler.ctx.createStereoPanner(), c._panner.pan.value = c._stereo);
        c._panner.connect(c._node);
        c._paused || c._parent.pause(c._id, !0).play(c._id)
    }
})();
(function (c) {
    Number.prototype.map = function (c, d, e, f) {
        return e + (f - e) * ((this - c) / (d - c))
    };
    Number.prototype.limit = function (c, d) {
        return Math.min(d, Math.max(c, this))
    };
    Number.prototype.round = function (c) {
        c = Math.pow(10, c || 0);
        return Math.round(this * c) / c
    };
    Number.prototype.floor = function () {
        return Math.floor(this)
    };
    Number.prototype.ceil = function () {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function () {
        return this | 0
    };
    Number.prototype.toRad = function () {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function () {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function (c) {
        for (var d = this.length; d--;) this[d] === c && this.splice(d, 1);
        return this
    };
    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function (c) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var d = Array.prototype.slice.call(arguments, 1),
            e = this,
            f = function () { },
            m = function () {
                return e.apply(this instanceof f && c ? this : c, d.concat(Array.prototype.slice.call(arguments)))
            };
        f.prototype = this.prototype;
        m.prototype = new f;
        return m
    };
    c.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: c,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: c.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function (c) {
            return "#" == c.charAt(0) ? document.getElementById(c.substr(1)) : document.getElementsByTagName(c)
        },
        $new: function (c) {
            return document.createElement(c)
        },
        copy: function (c) {
            if (!c || "object" != typeof c || c instanceof HTMLElement || c instanceof ig.Class) return c;
            if (c instanceof Array)
                for (var d = [], e = 0, f = c.length; e < f; e++) d[e] = ig.copy(c[e]);
            else
                for (e in d = {}, c) d[e] = ig.copy(c[e]);
            return d
        },
        merge: function (c, d) {
            for (var e in d) {
                var f = d[e];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class || null === f) c[e] = f;
                else {
                    if (!c[e] || "object" != typeof c[e]) c[e] = f instanceof Array ? [] : {};
                    ig.merge(c[e], f)
                }
            }
            return c
        },
        ksort: function (c) {
            if (!c || "object" != typeof c) return [];
            var d = [],
                e = [],
                f;
            for (f in c) d.push(f);
            d.sort();
            for (f = 0; f < d.length; f++) e.push(c[d[f]]);
            return e
        },
        setVendorAttribute: function (c, d, e) {
            var f = d.charAt(0).toUpperCase() + d.substr(1);
            c[d] = "undefined" !== typeof c.imageSmoothingEnabled ? c["ms" + f] = c["moz" + f] = c["o" + f] = e : c["ms" + f] = c["moz" + f] = c["webkit" + f] = c["o" + f] = e
        },
        getVendorAttribute: function (c, d) {
            var e = d.charAt(0).toUpperCase() + d.substr(1);
            return "undefined" !== typeof c.imageSmoothingEnabled ? c[d] || c["ms" + e] || c["moz" + e] || c["o" + e] : c[d] || c["ms" + e] || c["moz" + e] || c["webkit" + e] || c["o" + e]
        },
        normalizeVendorAttribute: function (c, d) {
            var e = ig.getVendorAttribute(c, d);
            !c[d] && e && (c[d] = e)
        },
        getImagePixels: function (c, d, e, f, m) {
            var p = ig.$new("canvas");
            p.width = c.width;
            p.height = c.height;
            var u = p.getContext("2d");
            ig.System.SCALE.CRISP(p, u);
            var D = ig.getVendorAttribute(u, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(u, "getImageDataHD");
            var G = c.width / D,
                J = c.height / D;
            p.width = Math.ceil(G);
            p.height = Math.ceil(J);
            u.drawImage(c, 0, 0, G, J);
            return 1 === D ? u.getImageData(d, e, f, m) : u.getImageDataHD(d, e, f, m)
        },
        module: function (c) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[c] && ig.modules[c].body) throw "Module '" + c + "' is already defined";
            ig._current = {
                name: c,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[c] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function () {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function (c) {
            ig._current.body = c;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function (c) {
            ig.resources.push(c)
        },
        setNocache: function (c) {
            ig.nocache = c ? "?" + Date.now() : ""
        },
        log: function () { },
        assert: function () { },
        show: function () { },
        mark: function () { },
        _loadScript: function (c, d) {
            ig.modules[c] = {
                name: c,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var e = ig.prefix + ig.lib + c.replace(/\./g, "/") + ".js" + ig.nocache,
                f = ig.$new("script");
            f.type = "text/javascript";
            f.src = e;
            f.onload = function () {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function () {
                throw "Failed to load module " + c + " at " + e + " required from " + d;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function () {
            for (var c = !1, d = 0; d < ig._loadQueue.length; d++) {
                for (var e = ig._loadQueue[d], f = !0, m = 0; m < e.requires.length; m++) {
                    var p = e.requires[m];
                    ig.modules[p] ? ig.modules[p].loaded || (f = !1) : (f = !1, ig._loadScript(p, e.name))
                }
                f && e.body && (ig._loadQueue.splice(d, 1), e.loaded = !0, e.body(), c = !0, d--)
            }
            if (c) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                c = [];
                for (d = 0; d < ig._loadQueue.length; d++) {
                    f = [];
                    p = ig._loadQueue[d].requires;
                    for (m = 0; m < p.length; m++) e = ig.modules[p[m]], (!e || !e.loaded) && f.push(p[m]);
                    c.push(ig._loadQueue[d].name + " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + c.join("\n");
            }
        },
        _DOMReady: function () {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function () {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = c.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: c.innerWidth,
                height: c.innerHeight
            };
            ig.ua.screen = {
                width: c.screen.availWidth * ig.ua.pixelRatio,
                height: c.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                c || c.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function () {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), c.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(c, "requestAnimationFrame");
    if (c.requestAnimationFrame) {
        var d = 1,
            e = {};
        c.ig.setAnimation = function (f, l) {
            var m = d++;
            e[m] = !0;
            var p = function () {
                e[m] && (c.requestAnimationFrame(p, l), f())
            };
            c.requestAnimationFrame(p, l);
            return m
        };
        c.ig.clearAnimation = function (c) {
            delete e[c]
        }
    } else c.ig.setAnimation = function (d) {
        return c.setInterval(d, 1E3 / 60)
    }, c.ig.clearAnimation = function (d) {
        c.clearInterval(d)
    };
    var f = !1,
        m = /xyz/.test(function () {
            xyz
        }) ? /\bparent\b/ : /.*/,
        p = 0;
    c.ig.Class = function () { };
    var u = function (c) {
        var d = this.prototype,
            e = {},
            f;
        for (f in c) "function" == typeof c[f] && "function" == typeof d[f] && m.test(c[f]) ? (e[f] = d[f], d[f] = function (c, d) {
            return function () {
                var f = this.parent;
                this.parent = e[c];
                var l = d.apply(this, arguments);
                this.parent = f;
                return l
            }
        }(f, c[f])) : d[f] = c[f]
    };
    c.ig.Class.extend = function (d) {
        function e() {
            if (!f) {
                if (this.staticInstantiate) {
                    var c = this.staticInstantiate.apply(this, arguments);
                    if (c) return c
                }
                for (var d in this) "object" == typeof this[d] && (this[d] = ig.copy(this[d]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var n = this.prototype;
        f = !0;
        var s = new this;
        f = !1;
        for (var x in d) s[x] = "function" == typeof d[x] && "function" == typeof n[x] && m.test(d[x]) ? function (c, d) {
            return function () {
                var e = this.parent;
                this.parent = n[c];
                var f = d.apply(this, arguments);
                this.parent = e;
                return f
            }
        }(x, d[x]) : d[x];
        e.prototype = s;
        e.prototype.constructor = e;
        e.extend = c.ig.Class.extend;
        e.inject = u;
        e.classId = s.classId = ++p;
        return e
    };
    c.ImpactMixin && ig.merge(ig, c.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function () {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function (c) {
            return ig.Image.cache[c] || null
        },
        init: function (c) {
            this.path = c;
            this.load()
        },
        load: function (c) {
            this.loaded ? c && c(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = c || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function () {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function () {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function () {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function (c) {
            var d = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                e = this.width * c,
                f = this.height * c,
                m = ig.$new("canvas");
            m.width = e;
            m.height = f;
            for (var p = m.getContext("2d"), u = p.getImageData(0, 0, e, f), t = 0; t < f; t++)
                for (var l = 0; l < e; l++) {
                    var n = 4 * (Math.floor(t / c) * this.width + Math.floor(l / c)),
                        s = 4 * (t * e + l);
                    u.data[s] = d.data[n];
                    u.data[s + 1] = d.data[n + 1];
                    u.data[s + 2] = d.data[n + 2];
                    u.data[s + 3] = d.data[n + 3]
                }
            p.putImageData(u, 0, 0);
            this.data = m
        },
        draw: function (c, d, e, f, m, p) {
            if (this.loaded) {
                var u = ig.system.scale;
                m = (m ? m : this.width) * u;
                p = (p ? p : this.height) * u;
                ig.system.context.drawImage(this.data, e ? e * u : 0, f ? f * u : 0, m, p, ig.system.getDrawPos(c), ig.system.getDrawPos(d), m, p);
                ig.Image.drawCount++
            }
        },
        drawTile: function (c, d, e, f, m, p, u) {
            m = m ? m : f;
            if (this.loaded && !(f > this.width || m > this.height)) {
                var t = ig.system.scale,
                    l = Math.floor(f * t),
                    n = Math.floor(m * t),
                    s = p ? -1 : 1,
                    x = u ? -1 : 1;
                if (p || u) ig.system.context.save(), ig.system.context.scale(s, x);
                ig.system.context.drawImage(this.data, Math.floor(e * f) % this.width * t, Math.floor(e * f / this.width) * m * t, l, n, ig.system.getDrawPos(c) * s - (p ? l : 0), ig.system.getDrawPos(d) * x - (u ? n : 0), l, n);
                (p || u) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function () {
        for (var c in ig.Image.cache) ig.Image.cache[c].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function () {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function (c) {
            this._loadMetrics(this.data);
            this.parent(c)
        },
        widthForString: function (c) {
            if (-1 !== c.indexOf("\n")) {
                c = c.split("\n");
                for (var d = 0, e = 0; e < c.length; e++) d = Math.max(d, this._widthForLine(c[e]));
                return d
            }
            return this._widthForLine(c)
        },
        _widthForLine: function (c) {
            for (var d = 0, e = 0; e < c.length; e++) d += this.widthMap[c.charCodeAt(e) - this.firstChar] +
                this.letterSpacing;
            return d
        },
        heightForString: function (c) {
            return c.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function (c, d, e, f) {
            "string" != typeof c && (c = c.toString());
            if (-1 !== c.indexOf("\n")) {
                c = c.split("\n");
                for (var m = this.height + this.lineSpacing, p = 0; p < c.length; p++) this.draw(c[p], d, e + p * m, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) p = this._widthForLine(c), d -= f == ig.Font.ALIGN.CENTER ? p / 2 : p;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (p = 0; p < c.length; p++) f = c.charCodeAt(p), d += this._drawChar(f - this.firstChar, d, e);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += c.length
            }
        },
        _drawChar: function (c, d, e) {
            if (!this.loaded || 0 > c || c >= this.indices.length) return 0;
            var f = ig.system.scale,
                m = this.widthMap[c] * f,
                p = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[c] * f, 0, m, p, ig.system.getDrawPos(d), ig.system.getDrawPos(e), m, p);
            return this.widthMap[c] + this.letterSpacing
        },
        _loadMetrics: function (c) {
            this.height = c.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var d = ig.getImagePixels(c, 0, c.height - 1, c.width, 1), e = 0, f = 0, m = 0; m < c.width; m++) {
                var p = 4 * m + 3;
                127 < d.data[p] ? f++ : 128 > d.data[p] && f && (this.widthMap.push(f), this.indices.push(m - f), e++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(m - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function () {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function () {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var c = new Audio, d = 0; d < ig.Sound.use.length; d++) {
                    var e = ig.Sound.use[d];
                    if (c.canPlayType(e.mime)) {
                        this.format = e;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function (c, d, e) {
            var f = ig.prefix + c.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[c]) {
                if (d && this.clips[c].length < ig.Sound.channels)
                    for (d = this.clips[c].length; d < ig.Sound.channels; d++) {
                        var m = new Audio(f);
                        m.load();
                        this.clips[c].push(m)
                    }
                return this.clips[c][0]
            }
            var p = new Audio(f);
            e && (p.addEventListener("canplaythrough", function t(d) {
                p.removeEventListener("canplaythrough", t, !1);
                e(c, !0, d)
            }, !1), p.addEventListener("error", function (d) {
                e(c, !1, d)
            }, !1));
            p.preload = "auto";
            p.load();
            this.clips[c] = [p];
            if (d)
                for (d = 1; d < ig.Sound.channels; d++) m = new Audio(f), m.load(), this.clips[c].push(m);
            return p
        },
        get: function (c) {
            c = this.clips[c];
            for (var d = 0, e; e = c[d++];)
                if (e.paused || e.ended) return e.ended && (e.currentTime = 0), e;
            c[0].pause();
            c[0].currentTime = 0;
            return c[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function () {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function (c, d) {
            if (ig.Sound.enabled) {
                var e = ig.soundManager.load(c instanceof ig.Sound ? c.path : c, !1);
                e.loop = this._loop;
                e.volume = this._volume;
                e.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(e);
                d && (this.namedTracks[d] = e);
                this.currentTrack || (this.currentTrack = e)
            }
        },
        next: function () {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function () {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function () {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function (c) {
            if (c && this.namedTracks[c]) c = this.namedTracks[c], c != this.currentTrack && (this.stop(), this.currentTrack = c);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function () {
            return this._loop
        },
        setLooping: function (c) {
            this._loop = c;
            for (var d in this.tracks) this.tracks[d].loop = c
        },
        getVolume: function () {
            return this._volume
        },
        setVolume: function (c) {
            this._volume = c.limit(0, 1);
            for (var d in this.tracks) this.tracks[d].volume = this._volume
        },
        fadeOut: function (c) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(c), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function () {
            var c = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= c ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = c
        },
        _endedCallback: function () {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function (c, d) {
            this.path = c;
            this.multiChannel = !1 !== d;
            this.load()
        },
        load: function (c) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, c) : ig.addResource(this) : c && c(this.path, !0)
        },
        play: function () {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function () {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function () {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function (c, d) {
            this.gameClass = c;
            this.resources = d;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var e = 0; e < this.resources.length; e++) this._unloaded.push(this.resources[e].path)
        },
        load: function () {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var c = 0; c < this.resources.length; c++) this.loadResource(this.resources[c]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function (c) {
            c.load(this._loadCallbackBound)
        },
        end: function () {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function () { },
        _loadCallback: function (c, d) {
            if (d) this._unloaded.erase(c);
            else throw "Failed to load resource: " + c;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function () {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function (c) {
            this.last = this.base = ig.Timer.time;
            this.target = c || 0
        },
        set: function (c) {
            this.target = c || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function () {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function () {
            var c = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : c
        },
        delta: function () {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function () {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function () {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function () {
        var c = Date.now();
        ig.Timer.time += Math.min((c - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = c
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function () {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function (c, d, e, f, m) {
            this.fps = d;
            this.clock = new ig.Timer;
            this.canvas = ig.$(c);
            this.resize(e, f, m);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function (c, d, e) {
            this.width = c;
            this.height = d;
            this.scale = e || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function (c) {
            this.running ? this.newGameClass = c : this.setGameNow(c)
        },
        setGameNow: function (c) {
            ig.game = new c;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function (c) {
            if ("function" == typeof c.run) this.delegate = c, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function () {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function () {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function (c) {
            this.context.fillStyle = c;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function () {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function (c) {
            return Math.round(c) * this.scale
        },
        SMOOTH: function (c) {
            return Math.round(c * this.scale)
        },
        SUBPIXEL: function (c) {
            return c * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function (c, d) {
            ig.setVendorAttribute(d, "imageSmoothingEnabled", !1);
            c.style.imageRendering = "-moz-crisp-edges";
            c.style.imageRendering = "-o-crisp-edges";
            c.style.imageRendering = "-webkit-optimize-contrast";
            c.style.imageRendering = "crisp-edges";
            c.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function (c, d) {
            ig.setVendorAttribute(d, "imageSmoothingEnabled", !0);
            c.style.imageRendering = "";
            c.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function () {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function () {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var c = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", c, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", c, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function () {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function () {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function (c) {
            var d = this.bindings[0 < (c.wheelDelta ? c.wheelDelta : -1 * c.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            d && (this.actions[d] = !0, this.presses[d] = !0, this.delayedKeyup[d] = !0, c.stopPropagation(), c.preventDefault())
        },
        mousemove: function (c) {
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (d = ig.system.realWidth);
            var d = ig.system.scale * (d / ig.system.realWidth),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            c = c.touches ? c.touches[0] : c;
            this.mouse.x = (c.clientX - e.left) / d;
            this.mouse.y = (c.clientY - e.top) / d
        },
        contextmenu: function (c) {
            this.bindings[ig.KEY.MOUSE2] && (c.stopPropagation(), c.preventDefault())
        },
        keydown: function (c) {
            var d = c.target.tagName;
            if (!("INPUT" == d || "TEXTAREA" ==
                d))
                if (d = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), d = this.bindings[d]) this.actions[d] = !0, this.locks[d] || (this.presses[d] = !0, this.locks[d] = !0), c.stopPropagation(), c.preventDefault()
        },
        keyup: function (c) {
            var d = c.target.tagName;
            if (!("INPUT" == d || "TEXTAREA" == d))
                if (d = this.bindings["keyup" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[d] = !0, c.stopPropagation(), c.preventDefault()
        },
        devicemotion: function (c) {
            this.accel = c.accelerationIncludingGravity
        },
        bind: function (c, d) {
            0 > c ? this.initMouse() : 0 < c && this.initKeyboard();
            this.bindings[c] = d
        },
        bindTouch: function (c, d) {
            var e = ig.$(c),
                f = this;
            e.addEventListener("touchstart", function (c) {
                f.touchStart(c, d)
            }, !1);
            e.addEventListener("touchend", function (c) {
                f.touchEnd(c, d)
            }, !1);
            e.addEventListener("MSPointerDown", function (c) {
                f.touchStart(c, d)
            }, !1);
            e.addEventListener("MSPointerUp", function (c) {
                f.touchEnd(c, d)
            }, !1)
        },
        unbind: function (c) {
            this.delayedKeyup[this.bindings[c]] = !0;
            this.bindings[c] = null
        },
        unbindAll: function () {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function (c) {
            return this.actions[c]
        },
        pressed: function (c) {
            return this.presses[c]
        },
        released: function (c) {
            return !!this.delayedKeyup[c]
        },
        clearPressed: function () {
            for (var c in this.delayedKeyup) this.actions[c] = !1, this.locks[c] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function (c, d) {
            this.actions[d] = !0;
            this.presses[d] = !0;
            c.stopPropagation();
            c.preventDefault();
            return !1
        },
        touchEnd: function (c, d) {
            this.delayedKeyup[d] = !0;
            c.stopPropagation();
            c.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function () {
    ig.main = function (c, d, e, f, m, p, u) {
        ig.system = new ig.System(c, e, f, m, p || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new (u || ig.Loader)(d, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function () {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function (c, d, e) {
            this.width = d;
            this.height = e;
            this.image = new ig.Image(c)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function (c, d, e, f) {
            this.sheet = c;
            this.pivot = {
                x: c.width / 2,
                y: c.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = d;
            this.sequence = e;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function () {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function (c) {
            this.timer.set(this.frameTime * -c - 1E-4);
            this.update()
        },
        gotoRandomFrame: function () {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function () {
            var c = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(c / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : c % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function (c, d) {
            var e = Math.max(this.sheet.width, this.sheet.height);
            c > ig.system.width || d > ig.system.height || (0 > c + e || 0 > d + e) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(c, d, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(c + this.pivot.x), ig.system.getDrawPos(d + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function () {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function (c, d, e) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = c;
            this.pos.y = this.last.y = d;
            ig.merge(this, e)
        },
        reset: function (c, d, e) {
            var f = this.constructor.prototype;
            this.pos.x = c;
            this.pos.y = d;
            this.last.x = c;
            this.last.y = d;
            this.vel.x = f.vel.x;
            this.vel.y = f.vel.y;
            this.accel.x = f.accel.x;
            this.accel.y = f.accel.y;
            this.health = f.health;
            this._killed = f._killed;
            this.standing = f.standing;
            this.type = f.type;
            this.checkAgainst = f.checkAgainst;
            this.collides = f.collides;
            ig.merge(this, e)
        },
        addAnim: function (c, d, e, f) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                c + " to.";
            d = new ig.Animation(this.animSheet, d, e, f);
            this.anims[c] = d;
            this.currentAnim || (this.currentAnim = d);
            return d
        },
        update: function () {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var c = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(c);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function (c, d, e, f) {
            return d ? (c + d * ig.system.tick).limit(-f, f) : e ? (d = e * ig.system.tick, 0 < c - d ? c - d : 0 > c + d ? c + d : 0) : c.limit(-f, f)
        },
        handleMovementTrace: function (c) {
            this.standing = !1;
            c.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            c.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (c.collision.slope) {
                var d = c.collision.slope;
                if (0 < this.bounciness) {
                    var e = this.vel.x * d.nx + this.vel.y * d.ny;
                    this.vel.x = (this.vel.x - 2 * d.nx * e) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * d.ny * e) * this.bounciness
                } else e = (this.vel.x * d.x + this.vel.y * d.y) / (d.x * d.x + d.y * d.y), this.vel.x = d.x * e, this.vel.y = d.y * e, d = Math.atan2(d.x, d.y), d > this.slopeStanding.min && d < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = c.pos
        },
        draw: function () {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function () {
            ig.game.removeEntity(this)
        },
        receiveDamage: function (c) {
            this.health -= c;
            0 >= this.health && this.kill()
        },
        touches: function (c) {
            return !(this.pos.x >= c.pos.x + c.size.x || this.pos.x + this.size.x <= c.pos.x || this.pos.y >= c.pos.y + c.size.y || this.pos.y + this.size.y <= c.pos.y)
        },
        distanceTo: function (c) {
            var d = this.pos.x + this.size.x / 2 - (c.pos.x + c.size.x / 2);
            c = this.pos.y + this.size.y / 2 - (c.pos.y + c.size.y / 2);
            return Math.sqrt(d * d + c * c)
        },
        angleTo: function (c) {
            return Math.atan2(c.pos.y +
                c.size.y / 2 - (this.pos.y + this.size.y / 2), c.pos.x + c.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function () { },
        collideWith: function () { },
        ready: function () { },
        erase: function () { }
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function (c, d) {
        c.checkAgainst & d.type && c.check(d);
        d.checkAgainst & c.type && d.check(c);
        c.collides && d.collides && c.collides + d.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(c, d)
    };
    ig.Entity.solveCollision = function (c, d) {
        var e = null;
        if (c.collides == ig.Entity.COLLIDES.LITE || d.collides == ig.Entity.COLLIDES.FIXED) e = c;
        else if (d.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) e = d;
        c.last.x + c.size.x > d.last.x && c.last.x < d.last.x + d.size.x ? (c.last.y < d.last.y ? ig.Entity.seperateOnYAxis(c, d, e) : ig.Entity.seperateOnYAxis(d, c, e), c.collideWith(d, "y"), d.collideWith(c, "y")) : c.last.y + c.size.y > d.last.y && c.last.y < d.last.y + d.size.y && (c.last.x < d.last.x ? ig.Entity.seperateOnXAxis(c, d, e) : ig.Entity.seperateOnXAxis(d, c, e), c.collideWith(d, "x"), d.collideWith(c, "x"))
    };
    ig.Entity.seperateOnXAxis = function (c, d, e) {
        var f = c.pos.x + c.size.x - d.pos.x;
        e ? (e.vel.x = -e.vel.x * e.bounciness + (c === e ? d : c).vel.x, d = ig.game.collisionMap.trace(e.pos.x, e.pos.y, e == c ? -f : f, 0, e.size.x, e.size.y), e.pos.x = d.pos.x) : (e = (c.vel.x - d.vel.x) / 2, c.vel.x = -e, d.vel.x = e, e = ig.game.collisionMap.trace(c.pos.x, c.pos.y, -f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.floor(e.pos.x), c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f / 2, 0, d.size.x, d.size.y), d.pos.x = Math.ceil(c.pos.x))
    };
    ig.Entity.seperateOnYAxis = function (c, d, e) {
        var f = c.pos.y + c.size.y - d.pos.y;
        if (e) {
            d = c === e ? d : c;
            e.vel.y = -e.vel.y * e.bounciness + d.vel.y;
            var m = 0;
            e == c && Math.abs(e.vel.y - d.vel.y) < e.minBounceVelocity && (e.standing = !0, m = d.vel.x * ig.system.tick);
            c = ig.game.collisionMap.trace(e.pos.x, e.pos.y, m, e == c ? -f : f, e.size.x, e.size.y);
            e.pos.y = c.pos.y;
            e.pos.x = c.pos.x
        } else ig.game.gravity && (d.standing || 0 < c.vel.y) ? (e = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, -(c.pos.y + c.size.y - d.pos.y), c.size.x, c.size.y), c.pos.y = e.pos.y, 0 < c.bounciness && c.vel.y > c.minBounceVelocity ? c.vel.y *= -c.bounciness : (c.standing = !0, c.vel.y = 0)) : (e = (c.vel.y - d.vel.y) / 2, c.vel.y = -e, d.vel.y = e, m = d.vel.x * ig.system.tick, e = ig.game.collisionMap.trace(c.pos.x, c.pos.y, m, -f / 2, c.size.x, c.size.y), c.pos.y = e.pos.y, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, 0, f / 2, d.size.x, d.size.y), d.pos.y = c.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function () {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function (c, d) {
            this.tilesize = c;
            this.data = d;
            this.height = d.length;
            this.width = d[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function (c, d) {
            var e = Math.floor(c / this.tilesize),
                f = Math.floor(d / this.tilesize);
            return 0 <= e && e < this.width && 0 <= f && f < this.height ? this.data[f][e] : 0
        },
        setTile: function (c, d, e) {
            c = Math.floor(c / this.tilesize);
            d = Math.floor(d /
                this.tilesize);
            0 <= c && c < this.width && 0 <= d && d < this.height && (this.data[d][c] = e)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function () {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function (c, d, m) {
            this.parent(c, d);
            this.tiledef = m || ig.CollisionMap.defaultTileDef;
            for (var p in this.tiledef) p | 0 > this.lastSlope && (this.lastSlope = p | 0)
        },
        trace: function (c, d, m, p, u, t) {
            var l = {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: c,
                    y: d
                },
                tile: {
                    x: 0,
                    y: 0
                }
            },
                n = Math.ceil(Math.max(Math.abs(m), Math.abs(p)) / this.tilesize);
            if (1 < n)
                for (var s = m / n, x = p / n, y = 0; y < n && (s || x) && !(this._traceStep(l,
                    c, d, s, x, u, t, m, p, y), c = l.pos.x, d = l.pos.y, l.collision.x && (m = s = 0), l.collision.y && (p = x = 0), l.collision.slope); y++);
            else this._traceStep(l, c, d, m, p, u, t, m, p, 0);
            return l
        },
        _traceStep: function (c, d, m, p, u, t, l, n, s, x) {
            c.pos.x += p;
            c.pos.y += u;
            var y = 0;
            if (p) {
                var A = 0 < p ? t : 0,
                    D = 0 > p ? this.tilesize : 0,
                    y = Math.max(Math.floor(m / this.tilesize), 0),
                    G = Math.min(Math.ceil((m + l) / this.tilesize), this.height);
                p = Math.floor((c.pos.x + A) / this.tilesize);
                var J = Math.floor((d + A) / this.tilesize);
                if (0 < x || p == J || 0 > J || J >= this.width) J = -1;
                if (0 <= p && p < this.width)
                    for (var F =
                        y; F < G && !(-1 != J && (y = this.data[F][J], 1 < y && y <= this.lastSlope && this._checkTileDef(c, y, d, m, n, s, t, l, J, F))); F++)
                        if (y = this.data[F][p], 1 == y || y > this.lastSlope || 1 < y && this._checkTileDef(c, y, d, m, n, s, t, l, p, F)) {
                            if (1 < y && y <= this.lastSlope && c.collision.slope) break;
                            c.collision.x = !0;
                            c.tile.x = y;
                            d = c.pos.x = p * this.tilesize - A + D;
                            n = 0;
                            break
                        }
            }
            if (u) {
                A = 0 < u ? l : 0;
                u = 0 > u ? this.tilesize : 0;
                y = Math.max(Math.floor(c.pos.x / this.tilesize), 0);
                D = Math.min(Math.ceil((c.pos.x + t) / this.tilesize), this.width);
                F = Math.floor((c.pos.y + A) / this.tilesize);
                G = Math.floor((m + A) / this.tilesize);
                if (0 < x || F == G || 0 > G || G >= this.height) G = -1;
                if (0 <= F && F < this.height)
                    for (p = y; p < D && !(-1 != G && (y = this.data[G][p], 1 < y && y <= this.lastSlope && this._checkTileDef(c, y, d, m, n, s, t, l, p, G))); p++)
                        if (y = this.data[F][p], 1 == y || y > this.lastSlope || 1 < y && this._checkTileDef(c, y, d, m, n, s, t, l, p, F)) {
                            if (1 < y && y <= this.lastSlope && c.collision.slope) break;
                            c.collision.y = !0;
                            c.tile.y = y;
                            c.pos.y = F * this.tilesize - A + u;
                            break
                        }
            }
        },
        _checkTileDef: function (c, d, m, p, u, t, l, n, s, x) {
            var y = this.tiledef[d];
            if (!y) return !1;
            d = (y[2] -
                y[0]) * this.tilesize;
            var A = (y[3] - y[1]) * this.tilesize,
                D = y[4];
            l = m + u + (0 > A ? l : 0) - (s + y[0]) * this.tilesize;
            n = p + t + (0 < d ? n : 0) - (x + y[1]) * this.tilesize;
            if (0 < d * n - A * l) {
                if (0 > u * -A + t * d) return D;
                s = Math.sqrt(d * d + A * A);
                x = A / s;
                s = -d / s;
                var G = l * x + n * s,
                    y = x * G,
                    G = s * G;
                if (y * y + G * G >= u * u + t * t) return D || 0.5 > d * (n - t) - A * (l - u);
                c.pos.x = m + u - y;
                c.pos.y = p + t - G;
                c.collision.slope = {
                    x: d,
                    y: A,
                    nx: x,
                    ny: s
                };
                return !0
            }
            return !1
        }
    });
    var c = 1 / 3,
        d = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, d, !0],
        6: [0, d, 1, c, !0],
        7: [0, c, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [d, 1, 1, 0, !0],
        43: [c, 1, d, 0, !0],
        54: [0, 1, c, 0, !0],
        27: [0, 0, 1, c, !0],
        28: [0, c, 1, d, !0],
        29: [0, d, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, c, 1, !0],
        44: [c, 0, d, 1, !0],
        55: [d, 0, 1, 1, !0],
        16: [1, c, 0, 0, !0],
        17: [1, d, 0, c, !0],
        18: [1, 1, 0, d, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [c, 1, 0, 0, !0],
        41: [d, 1, c, 0, !0],
        52: [1, 1, d, 0, !0],
        38: [1, d, 0, 1, !0],
        39: [1, c, 0, d, !0],
        40: [1, 0, 0, c, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, d, 1, !0],
        42: [d, 0, c, 1, !0],
        53: [c, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function (c, d, m, p) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: c + m,
                    y: d + p
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function () {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function (c, d, e) {
            this.parent(c, d);
            this.setTileset(e)
        },
        setTileset: function (c) {
            this.tilesetName = c instanceof ig.Image ? c.path : c;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function (c, d) {
            this.scroll.x = c / this.distance;
            this.scroll.y = d / this.distance
        },
        preRenderMapToChunks: function () {
            var c = this.width * this.tilesize * ig.system.scale,
                d = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(c, d), this.chunkSize);
            var e = Math.ceil(c / this.chunkSize),
                f = Math.ceil(d / this.chunkSize);
            this.preRenderedChunks = [];
            for (var m = 0; m < f; m++) {
                this.preRenderedChunks[m] = [];
                for (var p = 0; p < e; p++) this.preRenderedChunks[m][p] = this.preRenderChunk(p, m, p == e - 1 ? c - p * this.chunkSize : this.chunkSize, m == f - 1 ? d - m * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function (c, d, e, f) {
            var m = e / this.tilesize / ig.system.scale + 1,
                p = f / this.tilesize / ig.system.scale + 1,
                u = c * this.chunkSize / ig.system.scale % this.tilesize,
                t = d * this.chunkSize / ig.system.scale % this.tilesize;
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            d = Math.floor(d * this.chunkSize / this.tilesize / ig.system.scale);
            var l = ig.$new("canvas");
            l.width = e;
            l.height = f;
            l.retinaResolutionEnabled = !1;
            f = l.getContext("2d");
            ig.System.scaleMode(l, f);
            e = ig.system.context;
            ig.system.context = f;
            for (f = 0; f < m; f++)
                for (var n = 0; n < p; n++)
                    if (f + c < this.width && n + d < this.height) {
                        var s = this.data[n + d][f + c];
                        s && this.tiles.drawTile(f * this.tilesize - u, n * this.tilesize - t, s - 1, this.tilesize)
                    }
            ig.system.context = e;
            return l
        },
        draw: function () {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function () {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var c = ig.system.getDrawPos(this.scroll.x),
                d = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var e = this.width * this.tilesize * ig.system.scale,
                c = (c % e + e) % e,
                e = this.height * this.tilesize * ig.system.scale,
                d = (d % e + e) % e;
            var e = Math.max(Math.floor(c / this.chunkSize), 0),
                f = Math.max(Math.floor(d / this.chunkSize), 0),
                m = Math.ceil((c + ig.system.realWidth) / this.chunkSize),
                p = Math.ceil((d + ig.system.realHeight) / this.chunkSize),
                u = this.preRenderedChunks[0].length,
                t = this.preRenderedChunks.length;
            this.repeat || (m = Math.min(m, u), p = Math.min(p, t));
            for (var l = 0; f < p; f++) {
                for (var n = 0, s = e; s < m; s++) {
                    var x = this.preRenderedChunks[f % t][s % u],
                        y = -c + s * this.chunkSize - n,
                        A = -d + f * this.chunkSize - l;
                    ig.system.context.drawImage(x, y, A);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(y, A, this.chunkSize, this.chunkSize));
                    this.repeat && x.width < this.chunkSize && y + x.width < ig.system.realWidth && (n += this.chunkSize - x.width, m++)
                }
                this.repeat && x.height < this.chunkSize && A + x.height < ig.system.realHeight && (l += this.chunkSize - x.height, p++)
            }
        },
        drawTiled: function () {
            for (var c = 0, d = null, e = (this.scroll.x / this.tilesize).toInt(), f = (this.scroll.y / this.tilesize).toInt(), m = this.scroll.x % this.tilesize, p = this.scroll.y % this.tilesize, u = -m - this.tilesize, m = ig.system.width + this.tilesize - m, t = ig.system.height + this.tilesize - p, l = -1, p = -p - this.tilesize; p < t; l++, p += this.tilesize) {
                var n = l + f;
                if (n >= this.height || 0 > n) {
                    if (!this.repeat) continue;
                    n = (n % this.height + this.height) % this.height
                }
                for (var s = -1, x = u; x < m; s++, x += this.tilesize) {
                    c = s + e;
                    if (c >= this.width || 0 > c) {
                        if (!this.repeat) continue;
                        c = (c % this.width + this.width) % this.width
                    }
                    if (c = this.data[n][c]) (d = this.anims[c -
                        1]) ? d.draw(x, p) : this.tiles.drawTile(x, p, c - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function () {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function () {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function (c) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var d = 0; d < c.entities.length; d++) {
                var e = c.entities[d];
                this.spawnEntity(e.type, e.x, e.y, e.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (d = 0; d < c.layer.length; d++)
                if (e = c.layer[d], "collision" == e.name) this.collisionMap = new ig.CollisionMap(e.tilesize, e.data);
                else {
                    var f = new ig.BackgroundMap(e.tilesize, e.data, e.tilesetName);
                    f.anims = this.backgroundAnims[e.tilesetName] || {};
                    f.repeat = e.repeat;
                    f.distance = e.distance;
                    f.foreground = !!e.foreground;
                    f.preRender = !!e.preRender;
                    f.name = e.name;
                    this.backgroundMaps.push(f)
                }
            for (d = 0; d < this.entities.length; d++) this.entities[d].ready()
        },
        loadLevelDeferred: function (c) {
            this._levelToLoad = c
        },
        getMapByName: function (c) {
            if ("collision" == c) return this.collisionMap;
            for (var d = 0; d < this.backgroundMaps.length; d++)
                if (this.backgroundMaps[d].name == c) return this.backgroundMaps[d];
            return null
        },
        getEntityByName: function (c) {
            return this.namedEntities[c]
        },
        getEntitiesByType: function (c) {
            c = "string" === typeof c ? ig.global[c] : c;
            for (var d = [], e = 0; e < this.entities.length; e++) {
                var f = this.entities[e];
                f instanceof c && !f._killed && d.push(f)
            }
            return d
        },
        spawnEntity: function (c, d, e, f) {
            var m = "string" === typeof c ? ig.global[c] : c;
            if (!m) throw "Can't spawn entity of type " + c;
            c = new m(d, e, f || {});
            this.entities.push(c);
            c.name && (this.namedEntities[c.name] = c);
            return c
        },
        sortEntities: function () {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function () {
            this._doSortEntities = !0
        },
        removeEntity: function (c) {
            c.name && delete this.namedEntities[c.name];
            c._killed = !0;
            c.type = ig.Entity.TYPE.NONE;
            c.checkAgainst = ig.Entity.TYPE.NONE;
            c.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(c)
        },
        run: function () {
            this.update();
            this.draw()
        },
        update: function () {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var c = 0; c < this._deferredKill.length; c++) this._deferredKill[c].erase(), this.entities.erase(this._deferredKill[c]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var d in this.backgroundAnims) {
                var c = this.backgroundAnims[d],
                    e;
                for (e in c) c[e].update()
            }
        },
        updateEntities: function () {
            for (var c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                d._killed || d.update()
            }
        },
        draw: function () {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var c;
            for (c = 0; c < this.backgroundMaps.length; c++) {
                var d =
                    this.backgroundMaps[c];
                if (d.foreground) break;
                d.setScreenPos(this.screen.x, this.screen.y);
                d.draw()
            }
            this.drawEntities();
            for (c; c < this.backgroundMaps.length; c++) d = this.backgroundMaps[c], d.setScreenPos(this.screen.x, this.screen.y), d.draw()
        },
        drawEntities: function () {
            for (var c = 0; c < this.entities.length; c++) this.entities[c].draw()
        },
        checkEntities: function () {
            for (var c = {}, d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                if (!(e.type == ig.Entity.TYPE.NONE && e.checkAgainst == ig.Entity.TYPE.NONE && e.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, m = Math.floor(e.pos.y / this.cellSize), p = Math.floor((e.pos.x + e.size.x) / this.cellSize) + 1, u = Math.floor((e.pos.y + e.size.y) / this.cellSize) + 1, t = Math.floor(e.pos.x / this.cellSize); t < p; t++)
                        for (var l = m; l < u; l++)
                            if (c[t])
                                if (c[t][l]) {
                                    for (var n = c[t][l], s = 0; s < n.length; s++) e.touches(n[s]) && !f[n[s].id] && (f[n[s].id] = !0, ig.Entity.checkPair(e, n[s]));
                                    n.push(e)
                                } else c[t][l] = [e];
                            else c[t] = {}, c[t][l] = [e]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function (c, d) {
            return c.zIndex - d.zIndex
        },
        POS_X: function (c, d) {
            return c.pos.x + c.size.x - (d.pos.x +
                d.size.x)
        },
        POS_Y: function (c, d) {
            return c.pos.y + c.size.y - (d.pos.y + d.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function () {
    ig.System && (ig.System.SCALE = {
        CRISP: function (c, d) {
            d.imageSmoothingEnabled = d.msImageSmoothingEnabled = d.mozImageSmoothingEnabled = d.oImageSmoothingEnabled = !1;
            c.style.imageRendering = "-moz-crisp-edges";
            c.style.imageRendering = "-o-crisp-edges";
            c.style.imageRendering = "-webkit-optimize-contrast";
            c.style.imageRendering = "crisp-edges";
            c.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function (c, d) {
            d.imageSmoothingEnabled = d.msImageSmoothingEnabled = d.mozImageSmoothingEnabled = d.oImageSmoothingEnabled = !0;
            c.style.imageRendering = "";
            c.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function () {
    var c = !1;
    try {
        c = window.self !== window.top, !1 === c && (c = 0 < window.frames.length)
    } catch (d) {
        c = !0
    }
    ig.Input.inject({
        keydown: function (d) {
            var f = d.target.tagName;
            if (!("INPUT" == f || "TEXTAREA" == f))
                if (f = "keydown" == d.type ? d.keyCode : 2 == d.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, c && 0 > f && window.focus(), ("touchstart" == d.type || "mousedown" == d.type) && this.mousemove(d), f = this.bindings[f]) this.actions[f] = !0, this.locks[f] || (this.presses[f] = !0, this.locks[f] = !0), d.stopPropagation(), d.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function () {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function () {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function () {
            return "undefined" !== typeof jQuery
        },
        addEvent: function (c, d, e, f) {
            if (this.JQUERYAVAILABLE) c.on(d, e);
            else c.addEventListener(d, e, f)
        },
        create: function (c) {
            return this.JQUERYAVAILABLE ? $("<" + c + ">") : ig.$new(c)
        },
        getElementByClass: function (c) {
            return this.JQUERYAVAILABLE ? $("." + c) : document.getElementsByClassName(c)
        },
        getElementById: function (c) {
            return this.JQUERYAVAILABLE ? 0 < $(c).length ? $(c) : null : ig.$(c)
        },
        appendChild: function (c, d) {
            this.JQUERYAVAILABLE ? c.append(d) : c.appendChild(d)
        },
        appendToBody: function (c) {
            this.JQUERYAVAILABLE ? $("body").append(c) : document.body.appendChild(c)
        },
        resize: function (c, d, e) {
            if (this.JQUERYAVAILABLE) c.width(d.toFixed(2)), c.height(e.toFixed(2));
            else {
                var f = c.style.visibility;
                d = "width:" + d.toFixed(2) + "px; height:" + e.toFixed(2) + "px;";
                this.attr(c, "style", d);
                c.style.visibility = f
            }
        },
        resizeOffsetLeft: function (c, d, e, f) {
            if (this.JQUERYAVAILABLE) c.width(d.toFixed(2)), c.height(e.toFixed(2)), c.css("left", f);
            else {
                var m = c.style.visibility;
                d = "width:" + d.toFixed(2) + "px; height:" + e.toFixed(2) + "px; left: " + f.toFixed(2) + "px;";
                this.attr(c, "style", d);
                c.style.visibility = m
            }
        },
        css: function (c, d) {
            if (this.JQUERYAVAILABLE) c.css(d);
            else {
                var e = "",
                    f;
                for (f in d) e += f + ":" + d[f] + ";";
                this.attr(c, "style", e)
            }
        },
        getOffsets: function (c) {
            return this.JQUERYAVAILABLE ? (c = c.offset(), {
                left: c.left,
                top: c.top
            }) : {
                left: c.offsetLeft,
                top: c.offsetTop
            }
        },
        attr: function (c, d, e) {
            if ("undefined" === typeof e) return this.JQUERYAVAILABLE ? c.attr(d) : c.getAttribute(d);
            this.JQUERYAVAILABLE ? c.attr(d, e) : c.setAttribute(d, e)
        },
        show: function (c) {
            this.JQUERYAVAILABLE ? (c.show(), c.css("visibility", "visible")) : c && (c.style ? c.style.visibility = "visible" : c[0] && (c[0].style.visibility = "visible"))
        },
        hide: function (c) {
            this.JQUERYAVAILABLE ? (c.hide(), c.css("visibility", "hidden")) : c && (c.style ? c.style.visibility = "hidden" : c[0] && (c[0].style.visibility = "hidden"))
        },
        getQueryVariable: function (c) {
            for (var d = window.location.search.substring(1).split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]) == c) return decodeURIComponent(f[1])
            }
        },
        forcedDeviceDetection: function () {
            var c = this.getQueryVariable("device");
            if (c) switch (c) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function () {
            var c = this.getQueryVariable("force-rotate");
            if (c) switch (c) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function () {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function (c, d) {
            typeof c === this.valType && typeof d === this.valType && (this.x = c, this.y = d)
        },
        row: function (c) {
            typeof c === this.valType && (this.y = c);
            return this.y
        },
        col: function (c) {
            typeof c === this.valType && (this.x = c);
            return this.x
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function () {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
        },
        init: function (c) {
            this.domHandler = c;
            if ("undefined" === typeof c) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function () {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var c = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / c.x, this.mobile.actualSize.y / c.y);
                var d = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = c.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = c.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), c = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / c.x, this.desktop.actualSize.y / c.y), d = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = c.x * d, this.desktop.actualSize.y = c.y * d;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function () {
            for (var c = 0; c < this.coreDivsToResize.length; c++) {
                var d = ig.domHandler.getElementById(this.coreDivsToResize[c]);
                ig.ua.mobile ? ig.domHandler.resize(d, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(d, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var e in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" +
                    e),
                    d = ig.domHandler.getElementById("#" + e + "-Box"),
                    f = (window.innerWidth - this.adsToResize[e]["box-width"]) / 2 + "px",
                    m = (window.innerHeight - this.adsToResize[e]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: f,
                    top: m
                })
            }
            for (e in this.dynamicClickableEntityDivs) {
                d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                c = ig.domHandler.getElementById("#" + e);
                if (ig.ua.mobile) var p = this.dynamicClickableEntityDivs[e].entity_pos_x,
                    u = this.dynamicClickableEntityDivs[e].entity_pos_y,
                    m = this.dynamicClickableEntityDivs[e].width,
                    f = this.dynamicClickableEntityDivs[e].height,
                    t = Math.floor(p * this.scaleRatioMultiplier.x) + "px",
                    u = Math.floor(u * this.scaleRatioMultiplier.y) + "px",
                    m = Math.floor(m * this.scaleRatioMultiplier.x) + "px",
                    d = Math.floor(f * this.scaleRatioMultiplier.y) + "px";
                else var f = ig.domHandler.getElementById("#canvas"),
                    f = ig.domHandler.getOffsets(f),
                    t = f.left,
                    l = f.top,
                    p = this.dynamicClickableEntityDivs[e].entity_pos_x,
                    u = this.dynamicClickableEntityDivs[e].entity_pos_y,
                    m = this.dynamicClickableEntityDivs[e].width,
                    f = this.dynamicClickableEntityDivs[e].height,
                    t = Math.floor(t + p * d) + "px",
                    u = Math.floor(l + u * d) + "px",
                    m = Math.floor(m * d) + "px",
                    d = Math.floor(f * d) + "px";
                ig.domHandler.css(c, {
                    "float": "left",
                    position: "absolute",
                    left: t,
                    top: u,
                    width: m,
                    height: d,
                    "z-index": 3
                })
            }
        },
        resize: function () {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function () {
            if (ig.ua.mobile) {
                var c = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    d = this.domHandler.getElementById("#orientate"),
                    e = this.domHandler.getElementById("#game");
                c ? (this.domHandler.show(d), this.domHandler.hide(e)) : (this.domHandler.show(e), this.domHandler.hide(d))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function () {
            for (var c in this.adsToResize) {
                var d = ig.domHandler.getElementById("#" + c),
                    e = ig.domHandler.getElementById("#" + c + "-Box"),
                    f = (window.innerWidth - this.adsToResize[c]["box-width"]) / 2 + "px",
                    m = (window.innerHeight - this.adsToResize[c]["box-height"]) / 2 + "px";
                d && ig.domHandler.css(d, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                e && ig.domHandler.css(e, {
                    left: f,
                    top: m
                })
            }
        },
        samsungFix: function () {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function (c) {
                c.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function (c) {
                c.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function (c) {
                c.preventDefault();
                return !1
            }, !1))
        },
        eventListenerSetup: function () {
            window.addEventListener("resize", function () {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            window.addEventListener("orientationchange", function () {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            document.ontouchmove = function (c) {
                window.scrollTo(0, 1);
                c.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function () {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE
                // && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE

                // && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE
                // && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function () {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE
                // && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function (c, d) {
            if (this.apiAvailable[c]) this.apiAvailable[c](d)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function () {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function () {
            this.debug && console.log(this.tagName)
        },
        play: function (c) {
            this.debug && console.log("play sound ", c)
        },
        stop: function () {
            this.debug && console.log("stop sound ")
        },
        volume: function () {
            this.debug && console.log("set volume")
        },
        mute: function (c) {
            this.debug && console.log("mute");
            "undefined" === typeof c ? this.stayMuteFlag = !0 : c && (this.stayMuteFlag = !0)
        },
        unmute: function (c) {
            this.debug && console.log("unmute");
            "undefined" === typeof c ? this.stayMuteFlag = !1 : c && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function () {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function (c, d) {
            this.parent(c, d);
            for (var e in c) this.soundList[e] = e, ig.music.add(c[e].path + ".*", e);
            d && d.loop && (ig.music.loop = d.loop)
        },
        play: function (c) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof c ? ig.music.play(c) : ig.music.play())
        },
        stop: function () {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function (c) {
            console.log("impactmusic:", c);
            ig.music.volume = 0 > c ? 0 : isNaN(c) ? 1 : 1 < c ? 1 : c
        },
        getVolume: function () {
            return ig.music.volume
        },
        mute: function (c) {
            this.parent(c);
            this.bgmPlaying && this.stop()
        },
        unmute: function (c) {
            this.parent(c);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function () {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function (c, d) {
            this.parent(c, d);
            for (var e in c) {
                var f = new ig.Sound(c[e].path + ".*");
                this.soundList[e] = f
            }
        },
        play: function (c) {
            this.stayMuteFlag || ("object" === typeof c ? (console.log(c + " exists"), c.play()) : "string" === typeof c && this.soundList[c].play())
        },
        stop: function (c) {
            this.parent(c);
            c.stop()
        },
        volume: function (c) {
            ig.soundManager.volume = 0 > c ? 0 : isNaN(c) ? 1 : 1 < c ? 1 : c
        },
        getVolume: function () {
            return ig.soundManager.volume
        },
        mute: function (c) {
            this.parent(c);
            ig.Sound.enabled = !1
        },
        unmute: function (c) {
            this.parent(c);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function () {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function (c, d) {
            this.parent(c, d);
            for (var e in c) {
                var f = c[e].path,
                    f = new Howl({
                        src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[e] = f
            }
        },
        play: function (c) {
            this.stayMuteFlag || ("object" === typeof c ? c.play() : "string" === typeof c && this.soundList[c].play())
        },
        stop: function (c) {
            this.parent(c);
            c.stop()
        },
        volume: function (c) {
            for (var d in this.soundList) {
                if (0 > c) {
                    this.soundList[d].volume(0);
                    break
                }
                isNaN(c) ? this.soundList[d].volume(1) : 1 < c ? this.soundList[d].volume(1) : this.soundList[d].volume(c)
            }
        },
        getVolume: function () {
            for (var c in this.soundList) return this.soundList[c].volume()
        },
        mute: function (c) {
            this.parent(c);
            Howler.mute(!0)
        },
        unmute: function (c) {
            this.parent(c);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function () {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function (c, d) {
            this.parent(c, d);
            for (var e in c) {
                var f = c[e].path,
                    f = new Howl({
                        src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function () { }.bind(this)
                    });
                this.soundList[e] = f
            }
        },
        play: function (c) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof c) this.bgmPlaying = !0, c.play();
                else if ("string" === typeof c) this.bgmPlaying = !0, this.soundList[c].play();
                else
                    for (var d in this.soundList) {
                        this.soundList[d].play();
                        this.bgmPlaying = !0;
                        break
                    }
        },
        stop: function (c) {
            this.parent(c);
            if (this.bgmPlaying) {
                for (var d in this.soundList) this.soundList[d].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function (c) {
            for (var d in this.soundList) {
                if (0 > c) {
                    this.soundList[d].volume(0);
                    break
                }
                isNaN(c) ? this.soundList[d].volume(1) : 1 < c ? this.soundList[d].volume(1) : this.soundList[d].volume(c)
            }
        },
        getVolume: function () {
            for (var c in this.soundList) return this.soundList[c].volume()
        },
        mute: function (c) {
            this.parent(c);
            Howler.mute(!0)
        },
        unmute: function (c) {
            this.parent(c);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function () {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function (c, d) {
            this.parent(c, d);
            for (var e in c) {
                this.soundList[e] = e;
                var f = c[e].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: c[e].startMp3,
                            end: c[e].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function () {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function () {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function (c) {
            console.log("jukebox:", c);
            0 >= c ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(c) ? this.jukeboxPlayer.setVolume(1) : 1 < c ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(c)
        },
        getVolume: function () {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function (c) {
            this.parent(c);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function (c) {
            this.parent(c);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function () {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function (c) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0
            } catch (d) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (e) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(c));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(c)
        },
        initWebAudio: function (c) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var d = "start",
                e = "stop",
                f = this.webaudio.context.createBufferSource();
            "function" !== typeof f.start && (d = "noteOn");
            this.webaudio.compatibility.start = d;
            "function" !== typeof f.stop && (e = "noteOff");
            this.webaudio.compatibility.stop = e;
            for (var m in c) {
                this.soundList[m] = m;
                d = c[m].path;
                c = d + "." + ig.Sound.FORMAT.MP3.ext;
                var p = d + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (p = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (p = c));
                var u = new XMLHttpRequest;
                u.open("GET", p, !0);
                u.responseType = "arraybuffer";
                u.onload = function () {
                    this.webaudio.context.decodeAudioData(u.response, function (c) {
                        this.webaudio.buffer = c;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function () {
                        console.log('Error decoding audio "' + p + '".')
                    })
                }.bind(this);
                u.send();
                break
            }
        },
        initIOSWebAudioUnlock: function () {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var c = function () {
                    var d = webaudio.context,
                        e = d.createBuffer(1, 1, 22050),
                        f = d.createBufferSource();
                    f.buffer = e;
                    f.connect(d.destination);
                    "undefined" === typeof f.start ? f.noteOn(0) : f.start(0);
                    setTimeout(function () {
                        (f.playbackState === f.PLAYING_STATE || f.playbackState === f.FINISHED_STATE) && window.removeEventListener("touchend", c, !1)
                    }, 0)
                };
                window.addEventListener("touchend", c, !1)
            }
        },
        initHTML5Audio: function (c) {
            if (this.useHTML5Audio && this.audio) {
                var d = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var e in c) {
                    this.soundList[e] = e;
                    var f = c[e].path,
                        d = f + "." + ig.Sound.FORMAT.OGG.ext,
                        f = f + "." + ig.Sound.FORMAT.MP3.ext,
                        m = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? m = d : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (m = f);
                    if (m) {
                        ig.ua.mobile ? ig.ua.iOS && (m = f) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (m = f));
                        this.audio.addEventListener("error", function () {
                            this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = m;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = m;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var p = function () {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", p, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", p, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function (c) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(c) && (c = 0, this.pausedTime && (c = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, c, this.webaudio.buffer.duration - c), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                                c));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, c);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
                else if (this.audio) {
                    var d = this.audio;
                    if (!this.muteFlag) {
                        this.bgmPlaying = !0;
                        isNaN(c) && (c = 0, this.pausedTime && (c = this.pausedTime));
                        var e = this._duration - c;
                        this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                        this._onEndTimer = setTimeout(function () {
                            this.audio.currentTime = 0;
                            this.audio.pause();
                            this.pausedTime = 0;
                            if (this.inactiveAudio) {
                                var c = this.audio;
                                this.audio = this.inactiveAudio;
                                this.inactiveAudio = c
                            }
                            this.play()
                        }.bind(this), 1E3 * e + this.playDelay);
                        4 === d.readyState || !d.readyState && navigator.isCocoonJS ? (d.readyState = 4, d.currentTime = c, d.muted = this.muteFlag || d.muted, d.volume = this._volume, setTimeout(function () {
                            d.play()
                        }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function () {
                            var c = function () {
                                this.play();
                                d.removeEventListener("canplaythrough", c, !1)
                            }.bind(this);
                            d.addEventListener("canplaythrough", c, !1)
                        }())
                    }
                }
        },
        stop: function () {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                    var c = this.audio;
                    this.pausedTime = c.currentTime;
                    c.currentTime = 0;
                    c.pause();
                    clearTimeout(this._onEndTimer);
                    this._onEndTimer = null
                }
        },
        volume: function (c) {
            this.isSupported && (this._volume = c, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function () {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function (c) {
            this.parent(c);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function (c) {
            this.parent(c);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function () {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            button_play: {
                path: "media/audio/sfx/button_play"
            },
            end: {
                path: "media/audio/sfx/end"
            },
            explosion_big: {
                path: "media/audio/sfx/explosion_big"
            },
            explosion_small: {
                path: "media/audio/sfx/explosion_small"
            },
            missile: {
                path: "media/audio/sfx/missile"
            },
            reload: {
                path: "media/audio/sfx/reload"
            },
            soldier: {
                path: "media/audio/sfx/soldier_shoot"
            },
            turret: {
                path: "media/audio/sfx/turret_shoot"
            },
            vessel: {
                path: "media/audio/sfx/vessel"
            },
            wave_finished: {
                path: "media/audio/sfx/wave_finished"
            },
            wrong_shot: {
                path: "media/audio/sfx/wrong_shot"
            },
            bomber: {
                path: "media/audio/sfx/bomber"
            },
            helicopter: {
                path: "media/audio/sfx/helicopter"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm/bgm",
                startOgg: 0,
                endOgg: 14.766,
                startMp3: 0,
                endMp3: 14.811
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function () {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function () {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                loop: !0
            }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function () {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function () {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function (c) {
            this.sfxPlayer && this.sfxPlayer.mute(c)
        },
        muteBGM: function (c) {
            this.bgmPlayer && this.bgmPlayer.mute(c)
        },
        unmuteSFX: function (c) {
            this.sfxPlayer && this.sfxPlayer.unmute(c)
        },
        unmuteBGM: function (c) {
            this.bgmPlayer && this.bgmPlayer.unmute(c)
        },
        muteAll: function (c) {
            this.muteSFX(c);
            this.muteBGM(c)
        },
        unmuteAll: function (c) {
            this.unmuteSFX(c);
            this.unmuteBGM(c)
        },
        forceMuteAll: function () {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function () {
            this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        initWindowHandler: function () {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function () {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function () {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function () {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function () {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function () {
            var c = this.getHiddenProp();
            c && (c = c.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(c, this.visChange));
            window.addEventListener("pagehide", function () {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function () {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function () {
            var c = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var d = 0; d < c.length; d++)
                if (c[d] + "Hidden" in document) return c[d] + "Hidden";
            return null
        },
        isHidden: function () {
            var c = this.getHiddenProp();
            return !c ? !1 : document[c]
        },
        visChange: function () {
            ig.soundHandler.isHidden() ? (ig.ua.mobile && ig.game && ig.game.pauseGame(), ig.soundHandler && ig.soundHandler.forceMuteAll()) : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.forceUnMuteAll())
        },
        saveVolume: function () {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function () {
            var c;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var d = this.bgmPlayer.jukeboxPlayer;
                if (d) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    c = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var e = 0.1;
                    ig.ua.mobile && (e = 0.115, ig.ua.android && (e = 0.45, c && (e = 0.3)));
                    d.settings.spritemap.music && (c = d.settings.spritemap.music.end -
                        e, d.getCurrentTime() >= c && (c = d.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (d.play(c, !0), this.forcelooped = !0, setTimeout(function () {
                            ig.soundHandler.forcelooped = !1
                        }, e)) : d.setCurrentTime(c)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), c = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), e = 0.1, ig.ua.mobile && (e = 0.115, ig.ua.android && (e = 0.45, c && (e = 0.3))), d = 0, "mp3" == ig.soundManager.format.ext && (d = 0.05), ig.music.currentTrack && (c = ig.music.currentTrack.duration - e, ig.music.currentTrack.currentTime >= c && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = d, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function () {
                    ig.soundHandler.forcelooped = !1
                }, e)) : ig.music.currentTrack.currentTime = d)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function () {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function () {
            ig.Storage.instance = this
        },
        isCapable: function () {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function (c) {
            return null !== this.get(c)
        },
        initUnset: function (c, d) {
            null === this.get(c) && this.set(c, d)
        },
        get: function (c) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(c))
            } catch (d) {
                return window.localStorage.getItem(c)
            }
        },
        getInt: function (c) {
            return ~~this.get(c)
        },
        getFloat: function (c) {
            return parseFloat(this.get(c))
        },
        getBool: function (c) {
            return !!this.get(c)
        },
        key: function (c) {
            return this.isCapable() ? window.localStorage.key(c) : null
        },
        set: function (c, d) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(c, JSON.stringify(d))
            } catch (e) {
                console.log(e)
            }
        },
        setHighest: function (c, d) {
            d > this.getFloat(c) && this.set(c, d)
        },
        remove: function (c) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(c)
        },
        clear: function () {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function () {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function () {
            ig.Storage.instance = this
        },
        isCapable: function () {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function (c) {
            return null !== this.get(c)
        },
        initUnset: function (c, d) {
            null === this.get(c) && this.set(c, d)
        },
        get: function (c) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(c))
            } catch (d) {
                return window.localStorage.getItem(c)
            }
        },
        getInt: function (c) {
            return ~~this.get(c)
        },
        getFloat: function (c) {
            return parseFloat(this.get(c))
        },
        getBool: function (c) {
            return !!this.get(c)
        },
        key: function (c) {
            return this.isCapable() ? window.localStorage.key(c) : null
        },
        set: function (c, d) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(c, JSON.stringify(d))
            } catch (e) {
                console.log(e)
            }
        },
        setHighest: function (c, d) {
            d > this.getFloat(c) && this.set(c, d)
        },
        remove: function (c) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(c)
        },
        clear: function () {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        },
        isWritable: function () {
            if (!this.isCapable()) return null;
            try {
                return test = "test", window.localStorage.setItem(test, test), this.remove(test), !0
            } catch (c) {
                return -1 < c.message.indexOf("QuotaExceededError") && console.log("Local Storage Quota Exceeded."), !1
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.fake-storage").requires("impact.impact", "plugins.impact-storage").defines(function () {
    ig.FakeStorage = ig.Class.extend({
        data: {},
        supported: !1,
        convert: function () {
            try {
                return localStorage.setItem("testStorage", "testStorage"), localStorage.removeItem("testStorage"), localStorageSupport = "localStorage" in window && null !== window.localStorage, new ig.Storage
            } catch (c) {
                return this
            }
        },
        isSet: function (c) {
            return this.data[c] ? !0 : !1
        },
        getInt: function (c) {
            return ~~this.get(c)
        },
        getFloat: function (c) {
            return parseFloat(this.get(c))
        },
        initUnset: function (c, d) {
            this.get(c) || this.set(c, d)
        },
        setHighest: function (c, d) {
            d > this.getFloat(c) && this.set(c, d)
        },
        set: function (c, d) {
            this.data[c] = d
        },
        get: function (c) {
            return this.data[c]
        },
        getInt: function (c) {
            return this.data[c] ? parseInt(this.data[c]) : 0
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function () {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function () {
            ig.input.initMouse();
            for (var c in this.bindings) {
                this[c] = c;
                for (var d = 0; d < this.bindings[c].length; d++) ig.input.bind(this.bindings[c][d], c)
            }
        },
        getPos: function () {
            if (ig.ua.mobile) var c = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                d = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else c = ig.input.mouse.x, d = ig.input.mouse.y;
            return new Vector2(c, d)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function () {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function () {
            for (var c in this.bindings) {
                this[c] = c;
                for (var d = 0; d < this.bindings[c].length; d++) ig.input.bind(this.bindings[c][d], c)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function () {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function () {
            if (!this.isInit) {
                this.isInit = !0;
                var c = navigator.getGamepads || navigator.webkitGetGamepads;
                c && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = c
            }
        },
        isAvailable: function () {
            return this.isInit && this.isSupported
        },
        buttonPressed: function (c) {
            return "object" == typeof c ? c.pressed : 1 == c
        },
        buttonDown: function (c) {
            if (c = this.bindings[c]) this.states[c] = !0, this.downLocks[c] || (this.presses[c] = !0, this.downLocks[c] = !0)
        },
        buttonUp: function (c) {
            if ((c = this.bindings[c]) && this.downLocks[c] && !this.upLocks[c]) this.states[c] = !1, this.releases[c] = !0, this.upLocks[c] = !0
        },
        clearPressed: function () {
            for (var c in this.releases) this.states[c] = !1, this.downLocks[c] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function (c, d) {
            this.bindings[c] = d
        },
        unbind: function (c) {
            this.releases[this.bindings[c]] = !0;
            this.bindings[c] = null
        },
        unbindAll: function () {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function (c) {
            return this.states[c]
        },
        pressed: function (c) {
            return this.presses[c]
        },
        released: function (c) {
            return this.releases[c]
        },
        clamp: function (c, d, e) {
            return c < d ? d : c > e ? e : c
        },
        pollGamepads: function () {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var c in this.bindings) {
                    for (var d = !1, e = 0; e < this.list.length; e++) {
                        var f = this.list[e];
                        if (f && f.buttons && this.buttonPressed(f.buttons[c])) {
                            d = !0;
                            break
                        }
                    }
                    d ? this.buttonDown(c) : this.buttonUp(c)
                }
                for (e = 0; e < this.list.length; e++)
                    if ((f = this.list[e]) && f.axes) {
                        c = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var d = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            m = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            f = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(c) ? 0 : c;
                        this.leftStick.y += isNaN(d) ? 0 : d;
                        this.rightStick.x += isNaN(m) ? 0 : m;
                        this.rightStick.y += isNaN(f) ? 0 : f
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function () {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function () {
            ig.gamepadInput.start();
            for (var c in this.bindings)
                for (var d = 0; d < this.bindings[c].length; d++) ig.gamepadInput.bind(this.bindings[c][d], c)
        },
        press: function () { },
        held: function () { },
        release: function () { }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function () {
    Multitouch = ig.Class.extend({
        init: function () {
            ig.multitouchInput.start()
        },
        getTouchesPos: function () {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var c = [], d = 0; d < ig.multitouchInput.touches.length; d++) {
                        var e = ig.multitouchInput.touches[d];
                        c.push({
                            x: e.x,
                            y: e.y
                        })
                    }
                    return c
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function () {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function () {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function (c) {
            if (ig.ua.touchDevice) {
                var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                    d = ig.system.scale * (d / ig.system.realWidth),
                    e = ig.system.scale * (e / ig.system.realHeight);
                if (c.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < c.touches.length && (this.multitouchCapable = !0);
                    var f = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                    for (var m = 0; m < c.touches.length; m++) {
                        var p = c.touches[m];
                        p && this.touches.push({
                            x: (p.clientX - f.left) / d,
                            y: (p.clientY - f.top) / e
                        })
                    }
                } else this.windowMove(c)
            }
        },
        touchdown: function (c) {
            var d =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                d = ig.system.scale * (d / ig.system.realWidth),
                e = ig.system.scale * (e / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(c);
            else if (ig.ua.touchDevice && c.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < c.touches.length && (this.multitouchCapable = !0);
                var f = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                for (var m = 0; m < c.touches.length; m++) {
                    var p = c.touches[m];
                    p && this.touches.push({
                        x: (p.clientX - f.left) / d,
                        y: (p.clientY - f.top) / e
                    })
                }
            }
        },
        touchup: function (c) {
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            d = ig.system.scale * (d / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(c);
            else {
                this.lastEventUp = c;
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    c =
                        (c.changedTouches[0].clientX - e.left) / d;
                    for (d = 0; d < this.touches.length; d++) this.touches[d].x >= c - 40 && this.touches[d].x <= c + 40 && this.touches.splice(d, 1)
                }
            }
        },
        windowKeyDown: function (c) {
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                d = ig.system.scale * (d / ig.system.realWidth),
                e = ig.system.scale * (e / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var f = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                c = c.changedTouches ? c.changedTouches : [c];
                for (var m = 0; m < c.length; ++m) {
                    for (var p = c[m], u = "undefined" != typeof p.identifier ? p.identifier : "undefined" != typeof p.pointerId ? p.pointerId : 1, t = (p.clientX - f.left) / d, p = (p.clientY - f.top) / e, l = 0; l < this.touches.length; ++l) this.touches[l].identifier == u && this.touches.splice(l, 1);
                    this.touches.push({
                        x: t,
                        y: p,
                        identifier: u
                    })
                }
                for (d = 0; d < this.touches.length; d++);
            }
        },
        windowKeyUp: function (c) {
            c = "undefined" != typeof c.identifier ? c.identifier : "undefined" != typeof c.pointerId ? c.pointerId :
                1;
            for (var d = 0; d < this.touches.length; ++d) this.touches[d].identifier == c && this.touches.splice(d, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function (c) {
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                d = ig.system.scale * (d / ig.system.realWidth),
                e = ig.system.scale * (e / ig.system.realHeight),
                f = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var m = "undefined" != typeof c.identifier ? c.identifier : "undefined" != typeof c.pointerId ? c.pointerId : 1, p = 0; p < this.touches.length; ++p)
                    if (this.touches[p].identifier == m) {
                        var u = (c.clientY - f.top) / e;
                        this.touches[p].x = (c.clientX - f.left) / d;
                        this.touches[p].y = u
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.fake-storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function () {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function () {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function () {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function () {
            this.storage = this._supportsLocalStorage() ? new ig.Storage : new ig.FakeStorage;
            this.storage.initUnset("dtb-level", 1);
            this.storage.initUnset("dtb-sfx", !0);
            this.storage.initUnset("dtb-bgm", !0)
        },
        initMouse: function () {
            this.mouse = new Mouse
        },
        initKeyboard: function () {
            this.keyboard = new Keyboard
        },
        initMultitouch: function () {
            this.multitouch = new Multitouch
        },
        initGamepad: function () {
            this.gamepad = new Gamepad
        },
        press: function (c) {
            return ig.input.pressed(c) || this.gamepad.press(c) ? !0 : !1
        },
        held: function (c) {
            return ig.input.state(c) || this.gamepad.state(c) ? !0 : !1
        },
        release: function (c) {
            return ig.input.released(c) || this.gamepad.released(c) ? !0 : !1
        },
        getClickPos: function () {
            return this.mouse.getPos()
        },
        getTouchesPos: function () {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function (c, d, e, f, m) {
            return c.x > d + f || c.x < d || c.y > e + m || c.y < e ? !1 : !0
        },
        _supportsLocalStorage: function () {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (c) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function (c) {
            return !this.localStorageSupport ? null : this.storage.isSet(c)
        },
        storageGet: function (c) {
            return !this.localStorageSupport ? null : this.storage.get(c)
        },
        storageSet: function (c, d) {
            if (!this.localStorageSupport) return null;
            this.storage.set(c, d)
        },
        assert: function (c, d, e) {
            if (d !== e) throw "actualValue:" + d + " not equal to testValue:" + e + " at " +
                c;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function () {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashMobile: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
        loadingbar1: new ig.Image("media/graphics/splash/mobile/loadingbar1.png"),
        loadingbar2: new ig.Image("media/graphics/splash/mobile/loadingbar2.png"),
        init: function (c, d) {
            this.parent(c, d);
            ig.apiHandler.run("MJSPreroll")
        },
        end: function () {
            this.parent();
            if (ig.ua.mobile) {
                var c = ig.domHandler.getElementById("#play");
                ig.domHandler.show(c)
            }
            c = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", c)
        },
        setupCustomAnimation: function () {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function () {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function () {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.ua.mobile ? this.splashMobile.draw(0, 0) : this.splashDesktop.draw(0, 0);
            this.loadingbar1.draw(112, 760);
            ig.system.context.drawImage(this.loadingbar2.data, 120, 764, 300 * this._drawStatus, 11)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (c) {
        for (var d = 0; d < this.length; ++d)
            if (this[d] === c) return d;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function () {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var c = [], d = 0; d < this.tweens.length; d++) this.tweens[d].update(), this.tweens[d].complete || c.push(this.tweens[d]);
            this.tweens = c
        }
    };
    ig.Entity.prototype.tween = function (c, d, e) {
        c = new ig.Tween(this, c, d, e);
        this.tweens.push(c);
        return c
    };
    ig.Entity.prototype.pauseTweens = function () {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].pause()
    };
    ig.Entity.prototype.resumeTweens = function () {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].resume()
    };
    ig.Entity.prototype.stopTweens = function (c) {
        for (var d = 0; d < this.tweens.length; d++) this.tweens[d].stop(c)
    };
    ig.Tween = function (c, d, e, f) {
        var m = {},
            p = {},
            u = {},
            t = 0,
            l = !1,
            n = !1,
            s = !1;
        this.duration = e;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onStart = this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function (c) {
            s = c
        };
        this.initEnd = function (c, d, e) {
            if ("object" !== typeof d[c]) e[c] = d[c];
            else
                for (subprop in d[c]) e[c] || (e[c] = {}), this.initEnd(subprop, d[c], e[c])
        };
        this.initStart = function (c, d, e, f) {
            if ("object" !== typeof e[c]) "undefined" !== typeof d[c] && (f[c] = e[c]);
            else
                for (subprop in e[c]) f[c] || (f[c] = {}), "undefined" !== typeof d[c] && this.initStart(subprop, d[c], e[c], f[c])
        };
        this.start = function () {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            t = 0; - 1 == c.tweens.indexOf(this) && c.tweens.push(this);
            n = !0;
            l = new ig.Timer;
            for (var e in d) this.initEnd(e, d, p);
            for (e in p) this.initStart(e, p, c, m), this.initDelta(e, u, c, p);
            if (!this.delay && this.onStart) this.onStart()
        };
        this.initDelta = function (c, d, e, f) {
            if ("object" !== typeof f[c]) d[c] = f[c] - e[c];
            else
                for (subprop in f[c]) d[c] || (d[c] = {}), this.initDelta(subprop, d[c], e[c], f[c])
        };
        this.propUpdate = function (c, d, e, f, l) {
            if ("object" !== typeof e[c]) d[c] = "undefined" != typeof e[c] ? e[c] + f[c] * l : d[c];
            else
                for (subprop in e[c]) this.propUpdate(subprop, d[c], e[c], f[c], l)
        };
        this.propSet = function (c, d, e) {
            if ("object" !== typeof d[c]) e[c] = d[c];
            else
                for (subprop in d[c]) e[c] || (e[c] = {}), this.propSet(subprop, d[c], e[c])
        };
        this.update = function () {
            if (!n) return !1;
            if (this.delay) {
                if (l.delta() < this.delay) return;
                this.delay = 0;
                l.reset();
                if (this.onStart) this.onStart()
            }
            if (this.paused || this.complete) return !1;
            var d = (l.delta() + t) / this.duration,
                d = 1 < d ? 1 : d,
                e = this.easing(d);
            for (property in u) this.propUpdate(property, c, m, u, e);
            if (1 <= d) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    s && s.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in m) this.propSet(property, m, c);
                    t = 0;
                    l.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    d = {};
                    e = {};
                    ig.merge(d, p);
                    ig.merge(e, m);
                    ig.merge(m, d);
                    ig.merge(p, e);
                    for (property in p) this.initDelta(property, u, c, p);
                    t = 0;
                    l.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function () {
            this.paused = !0;
            t += l.delta()
        };
        this.resume = function () {
            this.paused = !1;
            l.reset()
        };
        this.stop = function (c) {
            c && (this.loop = this.complete = this.paused = !1, t += e, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function (c) {
        return c
    };
    ig.Tween.Easing.Quadratic.EaseIn = function (c) {
        return c * c
    };
    ig.Tween.Easing.Quadratic.EaseOut = function (c) {
        return -c * (c - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function (c) {
        return 1 > (c *= 2) ? 0.5 * c * c : -0.5 * (--c * (c - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function (c) {
        return c * c * c
    };
    ig.Tween.Easing.Cubic.EaseOut = function (c) {
        return --c * c * c + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function (c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c : 0.5 * ((c -= 2) * c * c + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function (c) {
        return c * c * c * c
    };
    ig.Tween.Easing.Quartic.EaseOut = function (c) {
        return -(--c * c * c * c - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function (c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c * c : -0.5 * ((c -= 2) * c * c * c - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function (c) {
        return c * c * c * c * c
    };
    ig.Tween.Easing.Quintic.EaseOut = function (c) {
        return (c -= 1) * c * c * c * c + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function (c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c * c * c : 0.5 * ((c -= 2) * c * c * c * c + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function (c) {
        return -Math.cos(c * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function (c) {
        return Math.sin(c * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function (c) {
        return -0.5 * (Math.cos(Math.PI * c) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function (c) {
        return 0 == c ? 0 : Math.pow(2, 10 * (c - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function (c) {
        return 1 == c ? 1 : -Math.pow(2, -10 * c) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function (c) {
        return 0 == c ? 0 : 1 == c ? 1 : 1 > (c *= 2) ? 0.5 * Math.pow(2, 10 * (c - 1)) : 0.5 * (-Math.pow(2, -10 * (c - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function (c) {
        return -(Math.sqrt(1 - c * c) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function (c) {
        return Math.sqrt(1 - --c * c)
    };
    ig.Tween.Easing.Circular.EaseInOut = function (c) {
        return 1 > (c /= 0.5) ? -0.5 * (Math.sqrt(1 - c * c) - 1) : 0.5 * (Math.sqrt(1 - (c -= 2) * c) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function (c) {
        var d, e = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !e || 1 > e ? (e = 1, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(1 / e);
        return -(e * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c - d) * Math.PI / f))
    };
    ig.Tween.Easing.Elastic.EaseOut = function (c) {
        var d, e = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !e || 1 > e ? (e = 1, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(1 / e);
        return e * Math.pow(2, -10 * c) * Math.sin(2 * (c - d) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function (c) {
        var d, e = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !e || 1 > e ? (e = 1, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(1 / e);
        return 1 > (c *= 2) ? -0.5 * e * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c - d) * Math.PI / f) : 0.5 * e * Math.pow(2, -10 * (c -= 1)) * Math.sin(2 * (c - d) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function (c) {
        return c * c * (2.70158 * c - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function (c) {
        return (c -= 1) * c * (2.70158 * c + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function (c) {
        return 1 > (c *= 2) ? 0.5 * c * c * (3.5949095 * c - 2.5949095) : 0.5 * ((c -= 2) * c * (3.5949095 * c + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function (c) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - c)
    };
    ig.Tween.Easing.Bounce.EaseOut = function (c) {
        return (c /= 1) < 1 / 2.75 ? 7.5625 * c * c : c < 2 / 2.75 ? 7.5625 * (c -= 1.5 / 2.75) * c + 0.75 : c < 2.5 / 2.75 ? 7.5625 * (c -= 2.25 / 2.75) * c + 0.9375 : 7.5625 * (c -= 2.625 / 2.75) * c + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function (c) {
        return 0.5 > c ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * c) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * c - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function () {
    ig.UrlParameters = ig.Class.extend({
        init: function () {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var c = getQueryVariable("webview");
            if (c) switch (c) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (c = getQueryVariable("debug")) switch (c) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function () {
    ig.Director = ig.Class.extend({
        init: function (c, d) {
            this.game = c;
            this.levels = [];
            this.currentLevel = 0;
            this.append(d)
        },
        loadLevel: function (c) {
            for (var d in ig.sizeHandler.dynamicClickableEntityDivs) {
                var e = ig.domHandler.getElementById("#" + d);
                ig.domHandler.hide(e)
            }
            this.currentLevel = c;
            this.game.loadLevel(this.levels[c]);
            return !0
        },
        loadLevelWithoutEntities: function (c) {
            this.currentLevel = c;
            this.game.loadLevelWithoutEntities(this.levels[c]);
            return !0
        },
        append: function (c) {
            newLevels = [];
            return "object" === typeof c ? (c.constructor === [].constructor ? newLevels = c : newLevels[0] = c, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function () {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function () {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function (c) {
            var d = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == c && (d = i);
            return 0 <= d ? this.loadLevel(d) : !1
        },
        firstLevel: function () {
            return this.loadLevel(0)
        },
        lastLevel: function () {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function () {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.entity-scaling").requires("impact.animation").defines(function () {
    ig.Animation.inject({
        scale: {
            x: 1,
            y: 1,
            align: {
                x: !1,
                y: !1
            }
        },
        draw: function (c, d) {
            var e = ig.system.scale;
            ig.system.context.save();
            var f = 0,
                m = 0,
                f = this.scale.align && this.scale.align.x && "left" == this.scale.align.x ? c : this.scale.align && this.scale.align.x && "right" == this.scale.align.x ? c + this.sheet.width : c + this.sheet.width / 2,
                m = this.scale.align && this.scale.align.y && "top" == this.scale.align.y ? d : this.scale.align && this.scale.align.y && "bottom" == this.scale.align.y ? d + this.sheet.height : d + this.sheet.height / 2;
            ig.system.context.translate(f * e, m * e);
            ig.system.context.scale(this.scale.x, this.scale.y);
            ig.system.context.translate(-f * e, -m * e);
            this.parent(c, d);
            ig.system.context.restore()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function () {
    ig.BrandingSplash = ig.Class.extend({
        init: function () {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function (c, d, e) {
            this.parent(c, d, e);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            c = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            d = this.tween({}, 2.5, {
                onComplete: function () {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            c.chain(d);
            c.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function () {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function (c) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    c) return !0;
            return !1
        },
        checkClickableLayer: function (c, d, e) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]), $("#" + c).find("[href]").attr("href", d)) : this.createClickableOutboundLayer(c, d, "media/graphics/misc/invisible.png", e))
        },
        createClickableOutboundLayer: function (c, d, e, f) {
            var m = ig.$new("div");
            m.id = c;
            document.body.appendChild(m);
            m = $("#" + m.id);
            m.css("float", "left");
            m.css("position", "absolute");
            if (ig.ua.mobile) {
                var p = window.innerHeight / mobileHeight,
                    u = window.innerWidth /
                        mobileWidth;
                m.css("left", this.pos.x * u);
                m.css("top", this.pos.y * p);
                m.css("width", this.size.x * u);
                m.css("height", this.size.y * p)
            } else p = w / 2 - destW / 2, u = h / 2 - destH / 2, console.log(p, u), m.css("left", p + this.pos.x * multiplier), m.css("top", u + this.pos.y * multiplier), m.css("width", this.size.x * multiplier), m.css("height", this.size.y * multiplier);
            f ? m.html("<a target='_blank' href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>") : m.html("<a href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[c].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        },
        draw: function () {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function () {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        state: "",
        enabled: !0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            !ig.global.wm && !isNaN(e.zIndex) && (this.zIndex = e.zIndex);
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            e = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + c + "," + e + "," + d + ",1)"
        },
        clicked: function () {
            throw "no implementation on clicked()";
        },
        clicking: function () {
            throw "no implementation on clicking()";
        },
        released: function () {
            throw "no implementation on released()";
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function () {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function (c) {
            this.pos = new Vector2(c.pos.x, c.pos.y);
            this.size = new Vector2(c.size.x, c.size.y);
            var d = "more-games",
                e = "www.google.com",
                f = !1;
            c.div_layer_name && (d = c.div_layer_name);
            c.link && (e = c.link);
            c.newWindow && (f = c.newWindow);
            this.createClickableLayer(d, e, f)
        },
        createClickableLayer: function (c, d, e) {
            this.identifier = c;
            var f = ig.domHandler.getElementById("#" + c);
            f ? (ig.domHandler.show(f), ig.domHandler.attr(f, "href", d)) : this.createClickableOutboundLayer(c, d, this.invisImagePath, e)
        },
        update: function (c, d) {
            this.pos.x === c && this.pos.y === d || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function (c, d, e, f) {
            var m = ig.domHandler.create("div");
            ig.domHandler.attr(m, "id", c);
            var p = ig.domHandler.create("a");
            f ? (ig.domHandler.attr(p, "href", d), ig.domHandler.attr(p, "target", "_blank")) : ig.domHandler.attr(p, "href", d);
            d = ig.domHandler.create("img");
            ig.domHandler.css(d, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(d, "src", e);
            e = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                f = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var u = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    t = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                e = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else f = ig.domHandler.getElementById("#canvas"), f = ig.domHandler.getOffsets(f), u = f.top, f = Math.floor(f.left + this.pos.x * e) + "px", u = Math.floor(u + this.pos.y * e) + "px", t = Math.floor(this.size.x * e) + "px", e = Math.floor(this.size.y * e) + "px";
            ig.domHandler.css(m, {
                "float": "left",
                position: "absolute",
                left: f,
                top: u,
                width: t,
                height: e,
                "z-index": 3
            });
            ig.domHandler.addEvent(m, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(p, d);
            ig.domHandler.appendChild(m, p);
            ig.domHandler.appendToBody(m);
            ig.sizeHandler.dynamicClickableEntityDivs[c] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[c].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[c].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function () {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function (c, d, e) {
            this.parent(c, d, e);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, e && e.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = e.div_layer_name ? e.div_layer_name : "branding-logo"
            }
        },
        show: function () {
            var c = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(c)
        },
        hide: function () {
            var c = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(c)
        },
        clicked: function () { },
        clicking: function () { },
        released: function () { }
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function () {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function (c, d, e) {
            this.parent(c, d, e);
            if (e) switch (console.log("settings found ... using that div layer name"), c = e.div_layer_name, console.log("settings.centralize:", e.centralize), e.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else c = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: c,
                        centralize: centralize
                    })
                } catch (f) {
                    console.log(f)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function () {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 182, 57),
        size: {
            x: 182,
            y: 57
        },
        zIndex: 750,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function (c, d, e) {
            this.parent(c, d, e);
            ig.global.wm || (this.div_layer_name = e.div_layer_name ? e.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
        },
        show: function () {
            var c = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(c)
        },
        hide: function () {
            var c = ig.domHandler.getElementById("#" +
                this.div_layer_name);
            ig.domHandler.hide(c)
        },
        clicked: function () { },
        clicking: function () { },
        released: function () { }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function () {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function (c, d, e) {
            this.parent(c, d, e)
        },
        ready: function () {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (c) {
                        console.log(c)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function () {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function () {
            if (this.moveTimer) {
                var c = ig.system.context;
                c.save();
                var d = ig.system.width / 2,
                    e = ig.system.height / 2;
                c.translate(d, e);
                c.rotate(this.move * Math.PI / 180);
                c.beginPath();
                c.moveTo(0, 0);
                for (var f = 0, m = 1; 48 >= m; m += 1) c.lineTo(0 + 800 * Math.cos(2 * m * Math.PI / 48), 0 + 800 * Math.sin(2 * m * Math.PI / 48)), f++, 2 == f && (f = 0, c.lineTo(0, 0));
                c.translate(-d, -e);
                d = c.createRadialGradient(d, e, 100, d, e, 250);
                d.addColorStop(0, "rgba(255,255,255,0.1)");
                d.addColorStop(1, "rgba(0,0,0,0)");
                c.fillStyle = d;
                c.fill();
                c.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function () {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function (c, d, e) {
            this.parent(c, d, e)
        },
        ready: function () {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (c) {
                        console.log(c)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function () {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function () {
            var c = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            c.addColorStop(0, "#ffed94");
            c.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = c;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function () {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        size: {
            x: 1,
            y: 1
        },
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 1E5,
        check: function (c) {
            this.objectArray.push(c)
        },
        clickObject: function (c) {
            this.isFirstPressed && "function" == typeof c.clicked && (c.clicked(), this.addToClickedObjectList(c));
            this.isPressed && !this.isReleased && "function" == typeof c.clicking && c.clicking();
            this.isReleased && "function" == typeof c.released && (c.released(), this.removeFromClickedObjectList(c))
        },
        refreshPos: function () {
            this.pos = ig.game.io.getClickPos()
        },
        update: function () {
            this.parent();
            this.refreshPos();
            var c = null,
                d = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > d && (d = this.objectArray[a].zIndex, c = this.objectArray[a]);
            if (null != c) null != this.hoveringItem ? this.hoveringItem != c && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof c.over && c.over()) : "function" == typeof c.over && c.over(), this.hoveringItem = c, this.clickObject(c), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (c = 0; c < this.clickedObjectList.length; c++) d = this.clickedObjectList[c], "function" == typeof d.releasedOutside && d.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click")
        },
        addToClickedObjectList: function (c) {
            this.clickedObjectList.push(c)
        },
        removeFromClickedObjectList: function (c) {
            for (var d = [], e = 0; e < this.clickedObjectList.length; e++) {
                var f = this.clickedObjectList[e];
                f != c && d.push(f)
            }
            this.clickedObjectList = d
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function () {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function (c, d, e) {
            this.parent(c, d, e)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function () {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function (c) {
            for (k in dynamicClickableEntityDivs)
                if (k == c) return !0;
            return !1
        },
        checkClickableLayer: function (c, d, e) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]), $("#" + c).find("[href]").attr("href", d)) : this.createClickableOutboundLayer(c, d, "media/graphics/misc/invisible.png", e))
        },
        createClickableOutboundLayer: function (c, d, e, f) {
            var m = ig.$new("div");
            m.id = c;
            document.body.appendChild(m);
            $("#" + m.id).css("float", "left");
            $("#" + m.id).css("width", this.size.x * multiplier);
            $("#" + m.id).css("height", this.size.y * multiplier);
            $("#" + m.id).css("position", "absolute");
            var p = w / 2 - destW / 2,
                u = h /
                    2 - destH / 2;
            w == mobileWidth ? ($("#" + m.id).css("left", this.pos.x), $("#" + m.id).css("top", this.pos.y)) : ($("#" + m.id).css("left", p + this.pos.x * multiplier), $("#" + m.id).css("top", u + this.pos.y * multiplier));
            f ? $("#" + m.id).html("<a target='_blank' href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>") : $("#" + m.id).html("<a href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = $("#" + m.id).width();
            dynamicClickableEntityDivs[c].height = $("#" + m.id).height();
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        },
        hovered: function () {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function () {
            var c = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < c.length; i++) c[i] != this && (c[i].isHovering = !1)
        },
        deselectOthers: function () {
            var c = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < c.length; i++) c[i] != this && (c[i].isSelected = !1)
        },
        update: function () {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function () {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("plugins.screen-fader").requires("impact.timer", "impact.animation").defines(function () {
    ig.ScreenFader = ig.Class.extend({
        defaultOptions: {
            color: {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            },
            fade: "in",
            speed: 1,
            screenWidth: 0,
            screenHeight: 0,
            waitUntilLoaded: !0,
            visible: !0
        },
        init: function (c) {
            this._setOptions(c);
            this._alpha = (c = "out" != this.options.fade) ? 0 : 1;
            this._alphaChange = c ? 1 : -1;
            if (this.options.tileImagePath) {
                if (isNaN(this.options.tileWidth)) throw Error("ScreenFader option for tileWidth is invalid");
                if (isNaN(this.options.tileHeight)) throw Error("ScreenFader option for tileHeight is invalid");
                this._sheet = new ig.AnimationSheet(this.options.tileImagePath, this.options.tileWidth, this.options.tileHeight);
                this._anim = new ig.Animation(this._sheet, 1, [0]);
                this._anim.alpha = this._alpha
            }
            isNaN(this.options.delayBefore) || (c = 0 >= this.options.delayBefore ? 0 : this.options.delayBefore, 0 < c && (this.timerDelayBefore = new ig.Timer(c)))
        },
        draw: function () {
            this.timerDelayAfter && 0 < this.timerDelayAfter.delta() && (delete this.timerDelayAfter, this._callUserCallback());
            if (this.timerDelayBefore) {
                if (0 > this.timerDelayBefore.delta()) return;
                delete this.timerDelayBefore
            }
            this.options.visible && (!this.isFinished && (!this._sheet || this._sheet.image.loaded || !this.options.waitUntilLoaded) && this._fadeAlphaValue(), 0 >= this._alpha || (this._anim ? this.drawImageTiledOnScreen() : this.drawColorOnScreen()))
        },
        drawImageTiledOnScreen: function () {
            for (var c = 0, d = 0, e = this.options.screenWidth, f = this.options.screenHeight, m = this.options.tileWidth, p = this.options.tileHeight; d < f;) {
                for (c = 0; c < e;) this._anim.draw(c, d), c += m;
                d += p
            }
        },
        drawColorOnScreen: function () {
            ig.system.clear(this.getColorCssValue())
        },
        getColorCssValue: function (c) {
            c = c || this.options.color;
            var d = ("undefined" != typeof c.a ? c.a : 1) * this._alpha;
            0 > d ? d = 0 : 1 < d && (d = 1);
            return "rgba(" + c.r + "," + c.g + "," + c.b + "," + d + ")"
        },
        finish: function () {
            if (!this.isFinished && (this._alpha = 0 < this._alphaChange ? 1 : 0, this._anim && (this._anim.alpha = this._alpha), this.isFinished = !0, "function" == typeof this.options.callback)) {
                var c = isNaN(this.options.delayAfter) ? 0 : this.options.delayAfter;
                0 < c ? this.timerDelayAfter = new ig.Timer(c) : this._callUserCallback()
            }
        },
        _callUserCallback: function () {
            this.options.callback.call(this.options.context || (ig.ScreenFader.globalGameIsContext ? ig.game : this))
        },
        _fadeAlphaValue: function () {
            this._alpha += this._alphaChange * this.options.speed * ig.system.tick * ig.ScreenFader.globalSpeedFactor;
            (0 < this._alphaChange && 1 <= this._alpha || 0 > this._alphaChange && 0 >= this._alpha) && this.finish();
            this._anim && (this._anim.alpha = this._alpha)
        },
        _setOptions: function (c) {
            this.options = ig.copy(this.defaultOptions);
            if (isNaN(this.options.screenWidth) || 0 >= this.options.screenWidth) this.options.screenWidth = ig.system.width;
            if (isNaN(this.options.screenHeight) || 0 >= this.options.screenHeight) this.options.screenHeight = ig.system.height;
            c && ig.merge(this.options, c)
        }
    });
    ig.ScreenFader.globalSpeedFactor = 2 / 3;
    ig.ScreenFader.globalGameIsContext = !0
});
ig.baked = !0;
ig.module("game.entities.screen-fader").requires("impact.entity", "plugins.screen-fader").defines(function () {
    EntityScreenFader = ig.Entity.extend({
        zIndex: 1E5,
        init: function (c, d, e) {
            this.parent(c, d, e);
            EntityScreenFader.prototype.isActive = !0;
            this.screenFader = new ig.ScreenFader({
                fade: "out",
                speed: 2,
                color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                },
                callback: function () {
                    EntityScreenFader.prototype.isActive = !1
                }
            })
        },
        draw: function () {
            this.parent();
            this.screenFader.draw()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.intro.bg_intro").requires("impact.entity").defines(function () {
    EntityBgIntro = ig.Entity.extend({
        size: {
            x: 540,
            y: 2160
        },
        zIndex: 100,
        land: new ig.Image("media/graphics/game/common/land.png", 540, 540),
        water: new ig.Image("media/graphics/game/common/water.png", 540, 540),
        divider: new ig.Image("media/graphics/game/common/divider.png", 540, 128),
        turret: new ig.Image("media/graphics/game/game/turret90.png", 16, 76),
        bunker: new ig.Image("media/graphics/game/game/bunker.png", 458, 176),
        init: function (c, d, e) {
            this.parent(c, d, e)
        },
        draw: function () {
            this.parent();
            this.water.draw(0, -540 - ig.game.screen.y);
            this.water.draw(0, -ig.game.screen.y);
            this.water.draw(0, 540 - ig.game.screen.y);
            this.water.draw(0, 1080 - ig.game.screen.y);
            this.water.draw(0, 1620 - ig.game.screen.y);
            this.water.draw(0, 2160 - ig.game.screen.y);
            this.water.draw(0, 2700 - ig.game.screen.y);
            this.land.draw(0, 3120 - ig.game.screen.y);
            this.divider.draw(0, 3070 - ig.game.screen.y);
            this.bunker.draw(41, 3340 - ig.game.screen.y);
            this.turret.draw(262, 3290 - ig.game.screen.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.muzzle-flash").requires("impact.entity").defines(function () {
    MuzzleFlash = ig.Entity.extend({
        size: {
            x: 67,
            y: 38
        },
        zIndex: 4E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/muzzleflash.png", 67, 38),
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2]);
            this.currentAnim.pivot.x = 0;
            this.currentAnim.pivot.y = 0.5 * this.size.y
        },
        update: function () {
            this.parent();
            null != this.currentAnim && 1 == this.currentAnim.loopCount && (this.currentAnim = null)
        },
        play: function () {
            this.currentAnim = this.anims.idle.rewind()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.dialogue").requires("impact.entity", "plugins.tween").defines(function () {
    EntityDialogue = ig.Entity.extend({
        size: {
            x: 348,
            y: 301
        },
        pos0: {},
        zIndex: 1E5,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/dialogue.jpg", 348, 301),
        text: {},
        shouldMoveOut: !0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.pos0.x = (ig.system.width - this.size.x) / 2;
            this.pos0.xr = this.pos0.x + ig.system.width;
            this.pos0.xl = -this.pos0.x - this.size.x;
            this.pos.x = this.pos0.xr;
            this.pos.y =
                150
        },
        draw: function () {
            this.parent()
        },
        drawText: function (c, d, e, f, m, p) {
            ig.system.context.fillStyle = m || "#FFFFFF";
            ig.system.context.textAlign = p || "left";
            ig.system.context.font = f || "30pt squada-one-reg";
            ig.system.context.fillText(c, d || 0, e || 0)
        },
        moveIn: function () {
            this.tween({
                pos: {
                    x: this.pos0.x
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Quadratic.EaseIn,
                delay: 0.5,
                onComplete: function () {
                    this.shouldMoveOut && this.moveOut()
                }.bind(this)
            }).start()
        },
        moveOut: function () {
            this.tween({
                pos: {
                    x: this.pos0.xl
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                delay: 1.6,
                onComplete: function () {
                    this.kill()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.menu-btn").requires("game.entities.buttons.button").defines(function () {
    EntityMenuBtn = EntityButton.extend({
        zIndex: 100005,
        size: {
            x: 140,
            y: 59
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/menu.png", 140, 59),
        ignorePause: !0,
        theParent: null,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function () {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("button_play"))
        },
        clicking: function () { },
        released: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    if ("control" == this.theParent.name || "menu" == this.theParent.name) this.theParent.moveOut(), ig.game.getEntitiesByType(EntityPlaybtn)[0].enabled = !0, ig.game.getEntitiesByType(EntityControlBtn)[0].enabled = !0, ig.game.getEntitiesByType(EntityOptionBtn)[0].enabled = !0, ig.game.getEntitiesByType(EntityButtonMoreGames)[0].show();
                    else {
                        for (var c = ig.game.getEntitiesByType(EntitySpawner)[0], d = ig.game.getEntitiesByType(EntityGameManager)[0], e = 0, f = c.alive.length; e < f; e++) c.alive[e].kill();
                        c.alive = [];
                        d.currentTarget = null;
                        c = ig.game.getEntitiesByType(EntityPauseMenu)[0];
                        null == c ? ig.game.director.jumpTo(LevelMenu) : "pause" == this.theParent.name && (c.unpauseGame(), ig.game.director.jumpTo(LevelMenu))
                    }
                }.bind(this)
            }).start())
        },
        leave: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.retry-btn").requires("game.entities.buttons.button").defines(function () {
    EntityRetryBtn = EntityButton.extend({
        zIndex: 2E5,
        size: {
            x: 140,
            y: 59
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/retry.png", 140, 59),
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function () {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("reload"))
        },
        clicking: function () { },
        released: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    this.spawner = ig.game.getEntitiesByType(EntitySpawner)[0];
                    for (var c = 0, d = this.spawner.alive.length; c < d; c++) this.spawner.alive[c].kill();
                    ig.game.director.reloadLevel()
                }
            }).start())
        },
        leave: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.dlg-lose").requires("game.entities.common.dialogue", "game.entities.buttons.menu-btn", "game.entities.buttons.retry-btn").defines(function () {
    EntityDialogueLose = EntityDialogue.extend({
        zIndex: 100001,
        name: "lose",
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.text.title = _STRINGS.Game.LoseTitle;
            this.text.wave = _STRINGS.Game.Wave;
            this.text.scoreTxt = _STRINGS.Game.Score;
            this.text.score = "";
            this.text.comboTxt = _STRINGS.Game.Combo;
            this.text.combo = "";
            this.text.accuracyTxt = _STRINGS.Game.Accuracy;
            this.text.accuracy = "";
            this.menu = ig.game.spawnEntity(EntityMenuBtn, this.pos.x + 22, this.pos.y + 227, {
                theParent: this
            });
            this.retry = ig.game.spawnEntity(EntityRetryBtn, this.pos.x + 184, this.pos.y + 227);
            ig.game.sortEntitiesDeferred();
            ig.soundHandler.sfxPlayer.play("end")
        },
        draw: function () {
            this.parent();
            this.drawText(this.text.title, this.pos.x + this.size.x / 2, this.pos.y + 45, "30pt squada-one-reg", "#FFFFFF", "center");
            this.drawText(this.text.wave, this.pos.x + this.size.x / 2, this.pos.y + 80, "22pt squada-one-reg", "#BCBCBC", "center");
            this.drawText(this.text.scoreTxt, this.pos.x + 40, this.pos.y + 120, "21pt squada-one-reg", "#FBFF7A", "left");
            this.drawText(this.text.score, this.pos.x + this.size.x - 40, this.pos.y + 120, "21pt squada-one-reg", "#FBFF7A", "right");
            this.drawText(this.text.comboTxt, this.pos.x + 40, this.pos.y + 160, "21pt squada-one-reg", "#FBFF7A", "left");
            this.drawText(this.text.combo, this.pos.x + this.size.x - 40, this.pos.y + 160, "21pt squada-one-reg", "#FBFF7A", "right");
            this.drawText(this.text.accuracyTxt, this.pos.x + 40, this.pos.y + 200, "21pt squada-one-reg", "#FBFF7A", "left");
            this.drawText(this.text.accuracy, this.pos.x + this.size.x - 40, this.pos.y + 200, "21pt squada-one-reg", "#FBFF7A", "right")
        },
        update: function () {
            this.parent();
            this.menu.pos.x = this.pos.x + 22;
            this.retry.pos.x = this.pos.x + 184
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.bullet-impact").requires("impact.entity").defines(function () {
    BulletImpact = ig.Entity.extend({
        size: {
            x: 64,
            y: 64
        },
        zIndex: 3E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/impact.png", 64, 64),
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            this.currentAnim.angle = Math.random() * Math.PI
        },
        update: function () {
            this.parent();
            null != this.currentAnim && 10 == this.currentAnim.frame && this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy").requires("impact.entity", "game.entities.game.bullet-impact").defines(function () {
    EntityEnemy = ig.Entity.extend({
        hitTimer: null,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        friction: {
            x: 100,
            y: 100
        },
        moveVel: {
            x: 0,
            y: 0
        },
        charLength: 0,
        currentLetter: 0,
        health: 0,
        speed: 0,
        numKillParticles: 20,
        numHitParticles: 5,
        word: "",
        remainingLetter: "",
        enemySize: "",
        enemyType: "",
        isDead: !1,
        isTargeted: !1,
        canMove: !0,
        paused: !1,
        isIntro: !1,
        sName: "",
        init: function (c, d, e) {
            this.parent(c, d, e);
            null != ig.game.getEntitiesByType(EntitySpawner)[0] && (this.spawner = ig.game.getEntitiesByType(EntitySpawner)[0])
        },
        setWord: function (c) {
            this.remainingLetter = this.word = c
        },
        update: function () {
            this.parent();
            this.canMove && (this.pos.y += 2 * this.speed * ig.system.tick)
        },
        draw: function () {
            this.parent();
            if (!this.isIntro) {
                var c = 15 * this.charLength,
                    d = this.pos.x + 0.5 * (this.size.x - c);
                0 > d ? d = 0 : d > 540 - c && (d = 540 - c);
                var e = this.pos.y + this.size.y;
                ig.system.context.save();
                ig.system.context.fillStyle = "rgba(0,0,0,0.5)";
                ig.system.context.fillRect(d, e, c, 25);
                ig.system.context.restore();
                ig.system.context.fillStyle = this.isTargeted ? "#FFA500" : "#FFFFFF";
                ig.system.context.textAlign = "center";
                ig.system.context.font = "15pt mikadobold";
                ig.system.context.fillText(this.remainingLetter, d + 0.5 * c, e + 18.75)
            }
        },
        isHitBy: function (c) {
            return this.remainingLetter.charAt(0).toLowerCase() == c.toLowerCase() ? (this.isTargeted = !0, this.remainingLetter = this.remainingLetter.substr(1), this.spawner.score += this.spawner.scoreRate, 0 == this.remainingLetter.length ? (this.isDead = !0, c = ig.game.spawnEntity("big" == this.enemySize ? ExplosionBig : ExplosionSmall, -500, -500), c.pos.x = this.pos.x + 0.5 * (this.size.x - c.size.x), c.pos.y = this.pos.y + 0.5 * (this.size.y - c.size.y)) : (c = ig.game.spawnEntity(BulletImpact, -500, -500), c.pos.x = this.pos.x + 0.5 * (this.size.x - c.size.x) + 0.5 * Math.random() * this.size.x - 0.25 * this.size.x, c.pos.y = this.pos.y + 0.8 * this.size.y - 0.5 * c.size.y, this.pos.y -= 3, this.canMove = !0, null != this.timer && this.timer.reset()), !0) : !1
        },
        randomAngleTo: function (c) {
            return Math.atan2(c.pos.y + c.size.y / 2 - (this.pos.y + this.size.y / 2), c.pos.x + c.size.x / 2 + 400 * Math.random() - 200 - (this.pos.x + this.size.x / 2))
        },
        killedByBomber: function () {
            var c = ig.game.spawnEntity("big" == this.enemySize ? ExplosionBig : ExplosionSmall, -500, -500);
            c.pos.x = this.pos.x + 0.5 * (this.size.x - c.size.x);
            c.pos.y = this.pos.y + 0.5 * (this.size.y - c.size.y);
            this.kill();
            this.spawner.score += this.remainingLetter.length * this.spawner.scoreRate
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-battle-cruiser").requires("game.entities.game.enemy").defines(function () {
    EntityEnemyBattleCruiser = EntityEnemy.extend({
        size: {
            x: 67,
            y: 346
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/battlecruiser.png", 67, 346),
        soundInfo: new SoundInfo,
        sName: "ves",
        init: function (c, d, e) {
            this.speed = 20;
            this.health = 8;
            this.charLength = 10;
            this.enemySize = "big";
            this.enemyType = "water";
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.isIntro || (this.sound = new Howl({
                src: [this.soundInfo.sfx.vessel.path + ".ogg", this.soundInfo.sfx.vessel.path + ".mp3"],
                loop: !0,
                volume: 0.6 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel"))
            }), this.sound.play())
        },
        update: function () {
            this.parent();
            this.isIntro || (0 < this.pos.y && this.canMove && (this.canMove = !1, null == this.timer && this.initTimeDeploy()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && (this.deploy(), this.timer.reset()))
        },
        initTimeDeploy: function () {
            this.timer = new ig.Timer;
            this.timer.set(3);
            this.deploy()
        },
        deploy: function () {
            var c = this.pos.x + 0.4 * this.size.x,
                d = this.pos.y + 0.8 * this.size.y;
            this.spawner.add(EnemyMissile, c, d, {
                zIndex: this.zIndex + 1,
                willAnimateIn: !1
            });
            d = this.pos.y + 0.4 * this.size.y;
            this.spawner.add(EnemyMissile, c, d, {
                zIndex: this.zIndex + 1,
                willAnimateIn: !1
            })
        },
        kill: function () {
            null != this.sound && this.sound.stop();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.missile-trail").requires("impact.entity").defines(function () {
    MissileTrail = ig.Entity.extend({
        size: {
            x: 65,
            y: 30
        },
        zIndex: 4E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/missiletrail.png", 65, 30),
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("init", 0.1, [0, 1, 2, 3, 4, 5, 6, 7]);
            this.addAnim("loop", 0.05, [8, 9, 10, 11, 12, 13, 14]);
            this.currentAnim.pivot.x = 0.85 * this.size.x
        },
        update: function () {
            this.parent();
            this.currentAnim == this.anims.init && 1 == this.currentAnim.loopCount && (this.currentAnim = this.anims.loop.rewind(), this.currentAnim.pivot.x = 0.85 * this.size.x)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-missile").requires("game.entities.game.enemy", "game.entities.game.missile-trail").defines(function () {
    EnemyMissile = EntityEnemy.extend({
        size: {
            x: 31,
            y: 13
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/missile.png", 31, 13),
        dir: 0,
        willAnimateIn: !0,
        init: function (c, d, e) {
            this.speed = 40;
            this.charLength = this.health = 1;
            this.enemySize = "small";
            this.enemyType = "air";
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.currentAnim.angle = Math.PI / 2;
            this.turret = ig.game.getEntitiesByType(EntityTurret)[0];
            this.willAnimateIn ? this.animateIn() : this.animateDone();
            ig.soundHandler.sfxPlayer.play("missile")
        },
        animateIn: function () {
            this.canMove = !1;
            this.tween({
                pos: {
                    x: this.pos.x + 30 * this.dir
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: this.animateDone.bind(this)
            }).start()
        },
        animateDone: function () {
            this.canMove = !0;
            this.turret = ig.game.getEntitiesByType(EntityTurret)[0];
            this.tween({
                currentAnim: {
                    angle: this.randomAngleTo(this.turret)
                }
            }, 5).start();
            this.trail = ig.game.spawnEntity(MissileTrail, this.pos.x, this.pos.y, {
                zIndex: this.zIndex - 1
            });
            this.trail.currentAnim.angle = this.currentAnim.angle;
            ig.game.sortEntitiesDeferred()
        },
        update: function () {
            this.parent();
            if (this.canMove) {
                var c = Math.cos(this.currentAnim.angle),
                    d = Math.sin(this.currentAnim.angle);
                this.moveVel.x = this.speed * c;
                this.moveVel.y = this.speed * d;
                this.pos.x += this.moveVel.x * ig.system.tick;
                this.pos.y += this.moveVel.y * ig.system.tick;
                this.trail.pos.x = this.pos.x - 0.65 * this.trail.size.x - this.currentAnim.pivot.x * c;
                this.trail.pos.y = this.pos.y - this.trail.size.y +
                    this.currentAnim.pivot.y * d;
                this.trail.currentAnim.angle = this.currentAnim.angle
            }
            600 < this.pos.y && (this.spawner.remove(this), ig.game.spawnEntity(ExplosionSmall, this.pos.x - 28, this.pos.y - 16), this.turret.receiveDamage(2, this), this.turret.blink = 0)
        },
        kill: function () {
            null != this.trail && this.trail.kill();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-heli-small").requires("game.entities.game.enemy", "game.entities.game.enemy-missile").defines(function () {
    EntityEnemyHeliSmall = EntityEnemy.extend({
        size: {
            x: 82,
            y: 92
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/helismall.png", 82, 92),
        dir: 0,
        willAnimateIn: !1,
        soundInfo: new SoundInfo,
        sName: "heli",
        init: function (c, d, e) {
            this.speed = 20;
            this.health = 8;
            this.charLength = 4;
            this.enemySize = "small";
            this.enemyType = "air";
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5]);
            this.dir = 0.5 > Math.random() ? 1 : -1;
            this.willAnimateIn ? this.animateIn() : this.animateDone();
            this.isIntro || (this.sound = new Howl({
                src: [this.soundInfo.sfx.helicopter.path + ".ogg", this.soundInfo.sfx.helicopter.path + ".mp3"],
                loop: !0,
                volume: 0.6 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel"))
            }), this.sound.play())
        },
        animateIn: function () {
            this.canMove = !1;
            this.currentAnim.scale.x = this.currentAnim.scale.y = 0.2;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.75, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: this.animateDone.bind(this)
            }).start()
        },
        animateDone: function () {
            this.canMove = !0
        },
        update: function () {
            this.parent();
            this.isIntro || (280 < this.pos.y && this.canMove && (this.canMove = !1, null == this.timer && this.initTimeDeploy()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && (this.deploy(), this.timer.reset()))
        },
        initTimeDeploy: function () {
            this.timer = new ig.Timer;
            this.timer.set(3);
            this.deploy()
        },
        deploy: function () {
            this.spawner.add(EnemyMissile, this.pos.x + 0.3 * this.size.x, this.pos.y + 0.5 * this.size.y, {
                dir: this.dir,
                zIndex: this.zIndex - 1
            });
            this.dir = -1 == this.dir ? 1 : -1
        },
        kill: function () {
            null != this.sound && this.sound.stop();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-carrier").requires("game.entities.game.enemy", "game.entities.game.enemy-heli-small").defines(function () {
    EntityEnemyCarrier = EntityEnemy.extend({
        size: {
            x: 60,
            y: 243
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/carrier.png", 60, 243),
        heliCount: 0,
        isIntro: !1,
        soundInfo: new SoundInfo,
        sName: "ves",
        init: function (c, d, e) {
            this.speed = 15;
            this.health = 8;
            this.charLength = 10;
            this.enemySize = "big";
            this.enemyType = "water";
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.isIntro || (this.sound = new Howl({
                src: [this.soundInfo.sfx.vessel.path + ".ogg", this.soundInfo.sfx.vessel.path + ".mp3"],
                loop: !0,
                volume: 0.6 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel"))
            }), this.sound.play())
        },
        update: function () {
            this.parent();
            this.isIntro || (0 < this.pos.y && this.canMove && (this.canMove = !1, null == this.timer && this.initTimeDeploy()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && (this.reloadTimer.unpause(), this.timer.pause()), null != this.reloadTimer && 0 < this.reloadTimer.delta() && this.spawner.gamePlay && this.deploy())
        },
        initTimeDeploy: function () {
            this.timer = new ig.Timer;
            this.timer.set(3);
            this.reloadTimer = new ig.Timer;
            this.reloadTimer.set(0.75)
        },
        deploy: function () {
            this.spawner.add(EntityEnemyHeliSmall, this.pos.x, this.pos.y + 0.45 * this.size.y - 0.2 * this.size.y * this.heliCount, {
                dir: this.dir,
                zIndex: this.zIndex + 1,
                willAnimateIn: !0
            });
            2 < ++this.heliCount ? (this.heliCount = 0, this.reloadTimer.reset(), this.reloadTimer.pause(), this.timer.reset(), this.timer.unpause()) : this.reloadTimer.reset()
        },
        kill: function () {
            null != this.sound && this.sound.stop();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-soldier").requires("game.entities.game.enemy").defines(function () {
    EnemySoldier = EntityEnemy.extend({
        size: {
            x: 46,
            y: 28
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/soldier.png", 46, 28),
        init: function (c, d, e) {
            this.speed = 15;
            this.charLength = this.health = 1;
            this.enemySize = "small";
            this.enemyType = "land";
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.turret = ig.game.getEntitiesByType(EntityTurret)[0];
            c = this.randomAngleTo(this.turret);
            this.currentAnim.angle = c;
            this.moveVel.x = this.speed * Math.cos(c);
            this.moveVel.y = this.speed * Math.sin(c);
            this.turret = ig.game.getEntitiesByType(EntityTurret)[0];
            ig.soundHandler.sfxPlayer.play("soldier")
        },
        update: function () {
            this.parent();
            this.canMove && (this.pos.x += this.moveVel.x * ig.system.tick, this.pos.y += this.moveVel.y * ig.system.tick);
            600 < this.pos.y && this.canMove && (this.spawner.remove(this), ig.game.spawnEntity(ExplosionSmall, this.pos.x - 24, this.pos.y - 20), this.turret.receiveDamage(1, this), this.turret.blink = 0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-boat").requires("game.entities.game.enemy", "game.entities.game.enemy-soldier").defines(function () {
    EntityEnemyBoat = EntityEnemy.extend({
        size: {
            x: 24,
            y: 62
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/boat.png", 24, 62),
        deltaX: 10,
        init: function (c, d, e) {
            this.speed = 20;
            this.health = 8;
            this.charLength = 3;
            this.enemySize = "small";
            this.enemyType = "water";
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.currentAnim.scale.x = this.currentAnim.scale.y = 0.95;
            this.currentAnim.angle = -0.0872665;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 1.05,
                        y: 1.05
                    },
                    angle: 0.0872665
                },
                speed: 5,
                deltaX: -10
            }, 0.75, {
                easing: ig.Tween.Easing.Sinusoidal.EaseInOut,
                loop: ig.Tween.Loop.Reverse
            }).start()
        },
        update: function () {
            this.parent();
            this.isIntro || (this.pos.x += this.deltaX * ig.system.tick, 370 < this.pos.y && this.canMove && (this.canMove = !1, this.stopTweens(), this.deltaX = 0, null == this.timer && this.initTimeDeploy()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && (this.deploy(), this.timer.reset()))
        },
        initTimeDeploy: function () {
            this.timer = new ig.Timer;
            this.timer.set(2)
        },
        deploy: function () {
            this.spawner.add(EnemySoldier, this.pos.x, this.pos.y + 0.8 * this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-corvette").requires("game.entities.game.enemy").defines(function () {
    EntityEnemyCorvette = EntityEnemy.extend({
        size: {
            x: 30,
            y: 143
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/corvette.png", 30, 143),
        init: function (c, d, e) {
            this.speed = 15;
            this.health = 8;
            this.charLength = 4;
            this.enemySize = "small";
            this.enemyType = "water";
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        },
        update: function () {
            this.parent();
            this.isIntro || (100 < this.pos.y && this.canMove && (this.canMove = !1, null == this.timer && this.initTimeDeploy()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && (this.deploy(), this.timer.reset()))
        },
        initTimeDeploy: function () {
            this.timer = new ig.Timer;
            this.timer.set(3);
            this.deploy()
        },
        deploy: function () {
            this.spawner.add(EnemyMissile, this.pos.x + 0.25 * this.size.x, this.pos.y + 0.7 * this.size.y, {
                zIndex: this.zIndex + 1,
                willAnimateIn: !1
            })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-dreadnought").requires("game.entities.game.enemy").defines(function () {
    EntityEnemyDreadnought = EntityEnemy.extend({
        size: {
            x: 85,
            y: 239
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/dreadnought.png", 85, 239),
        isIntro: !1,
        soundInfo: new SoundInfo,
        sName: "ves",
        init: function (c, d, e) {
            this.speed = 10;
            this.health = 8;
            this.charLength = 12;
            this.enemySize = "big";
            this.enemyType = "water";
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            c = 0.6 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel"));
            d = !0;
            this.isIntro && (d = !1, c = 0.15 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel")));
            this.sound = new Howl({
                src: [this.soundInfo.sfx.vessel.path + ".ogg", this.soundInfo.sfx.vessel.path + ".mp3"],
                loop: d,
                volume: c
            });
            this.sound.play()
        },
        update: function () {
            this.parent();
            this.isIntro || (0 < this.pos.y && this.canMove && (this.canMove = !1, null == this.timer && this.initTimeDeploy()), null != this.boatTimer && 0 < this.boatTimer.delta() && this.spawner.gamePlay && (this.deployBoat(), this.boatTimer.reset()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && (this.deployMissile(), this.timer.reset()))
        },
        initTimeDeploy: function () {
            this.boatTimer = new ig.Timer;
            this.boatTimer.set(7);
            this.timer = new ig.Timer;
            this.timer.set(3);
            this.deployBoat()
        },
        deployBoat: function () {
            var c = this.pos.x + 0.85 * this.size.x,
                d = this.pos.y + 0.35 * this.size.y;
            this.spawner.add(EntityEnemyBoat, c, d, {
                zIndex: this.zIndex + 1
            });
            c = this.pos.x - 0.15 * this.size.x;
            this.spawner.add(EntityEnemyBoat, c, d, {
                zIndex: this.zIndex + 1
            })
        },
        deployMissile: function () {
            this.spawner.add(EnemyMissile, this.pos.x +
                0.4 * this.size.x, this.pos.y + 0.25 * this.size.y, {
                zIndex: this.zIndex + 1,
                willAnimateIn: !1
            })
        },
        kill: function () {
            null != this.sound && this.sound.stop();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-heli-big").requires("game.entities.game.enemy").defines(function () {
    EntityEnemyHeliBig = EntityEnemy.extend({
        size: {
            x: 133,
            y: 149
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/helibig.png", 133, 149),
        dir: 0,
        missileCount: 0,
        soundInfo: new SoundInfo,
        sName: "heli",
        init: function (c, d, e) {
            this.speed = 10;
            this.health = 8;
            this.charLength = 12;
            this.enemySize = "big";
            this.enemyType = "air";
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5]);
            this.dir = 0.5 > Math.random() ? 1 : -1;
            this.isIntro || (this.sound = new Howl({
                src: [this.soundInfo.sfx.helicopter.path + ".ogg", this.soundInfo.sfx.helicopter.path + ".mp3"],
                loop: !0,
                volume: 0.6 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel"))
            }), this.sound.play())
        },
        update: function () {
            this.parent();
            this.isIntro || (100 < this.pos.y && this.canMove && (this.canMove = !1, null == this.timer && this.initTimeDeploy()), null != this.reloadTimer && 0 < this.reloadTimer.delta() && this.spawner.gamePlay && (this.timer.unpause(), this.reloadTimer.pause()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && this.deploy())
        },
        initTimeDeploy: function () {
            this.timer = new ig.Timer;
            this.timer.set(0.5);
            this.reloadTimer = new ig.Timer;
            this.reloadTimer.set(3)
        },
        deploy: function () {
            this.spawner.add(EnemyMissile, this.pos.x + 0.4 * this.size.x, this.pos.y + 0.5 * this.size.y, {
                dir: this.dir,
                zIndex: this.zIndex - 1
            });
            this.dir = -1 == this.dir ? 1 : -1;
            3 < ++this.missileCount ? (this.missileCount = 0, this.timer.reset(), this.timer.pause(), this.reloadTimer.reset(), this.reloadTimer.unpause()) : this.timer.reset()
        },
        kill: function () {
            null != this.sound && this.sound.stop();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-heli-med").requires("game.entities.game.enemy").defines(function () {
    EntityEnemyHeliMed = EntityEnemy.extend({
        size: {
            x: 100,
            y: 108
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/helimed.png", 100, 108),
        soundInfo: new SoundInfo,
        sName: "heli",
        init: function (c, d, e) {
            this.speed = 15;
            this.charLength = this.health = 8;
            this.enemySize = "small";
            this.enemyType = "air";
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5]);
            c = 0.6 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel"));
            d = !0;
            this.isIntro && (d = !1, c = 0.15 * Number(ig.game.storage.get("MarketJS_DTB_SfxLevel")));
            this.sound = new Howl({
                src: [this.soundInfo.sfx.helicopter.path + ".ogg", this.soundInfo.sfx.helicopter.path + ".mp3"],
                loop: d,
                volume: c
            });
            this.sound.play()
        },
        update: function () {
            this.parent();
            this.isIntro || (200 < this.pos.y && this.canMove && (this.canMove = !1, null == this.timer && this.initTimeDeploy()), null != this.timer && 0 < this.timer.delta() && this.spawner.gamePlay && (this.deploy(), this.timer.reset()))
        },
        initTimeDeploy: function () {
            this.timer = new ig.Timer;
            this.timer.set(3);
            this.deploy()
        },
        deploy: function () {
            var c = this.pos.x + 0.35 * this.size.x,
                d = this.pos.y + 0.5 * this.size.y;
            this.spawner.add(EnemyMissile, c, d, {
                dir: 1,
                zIndex: this.zIndex - 1
            });
            this.spawner.add(EnemyMissile, c, d, {
                dir: -1,
                zIndex: this.zIndex - 1
            })
        },
        kill: function () {
            null != this.sound && this.sound.stop();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.dlg-win").requires("game.entities.common.dialogue").defines(function () {
    EntityDialogueWin = EntityDialogue.extend({
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.text.above = _STRINGS.Game.WaveComing;
            this.text.below = ""
        },
        draw: function () {
            this.parent();
            this.drawText(this.text.above, this.pos.x + 49, this.pos.y + 120, "30pt squada-one-reg", "#FFFFFF");
            this.drawText(this.text.below, this.pos.x + 49, this.pos.y + 185, "25pt squada-one-reg", "#BCBCBC")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.spawner").requires("impact.entity", "game.entities.game.enemy-battle-cruiser", "game.entities.game.enemy-carrier", "game.entities.game.enemy-boat", "game.entities.game.enemy-corvette", "game.entities.game.enemy-dreadnought", "game.entities.game.enemy-heli-big", "game.entities.game.enemy-heli-med", "game.entities.game.enemy-heli-small", "game.entities.common.dlg-win").defines(function () {
    EntitySpawner = ig.Entity.extend({
        alive: [],
        spawnTypes: null,
        size: {
            x: 10,
            y: 10
        },
        random: -1,
        timer: null,
        airZIndex: 2E4,
        landZIndex: 1E4,
        enemyGroup: [],
        waveNo: 0,
        shouldNotSpawn: !0,
        spawnCheck: !1,
        score: 0,
        gamePlay: !0,
        scoreRate: 1,
        showGuideText: !1,
        guideTextAlpha: 0,
        bomber: !1,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.spawnTypes = [EntityEnemyBattleCruiser, EntityEnemyBoat, EntityEnemyCorvette, EntityEnemyCarrier, EntityEnemyDreadnought, EntityEnemyHeliBig, EntityEnemyHeliMed, EntityEnemyHeliSmall];
            this.timerGuideText = new ig.Timer(15);
            ig.ua.mobile || (this.txtType = _STRINGS.Game.Type, this.txtSpace = _STRINGS.Game.Space, this.txtShift = _STRINGS.Game.Shift)
        },
        start: function () {
            this.timer = new ig.Timer(1);
            this.timerWaveDelay = new ig.Timer(4);
            this.shouldNotSpawn = !1
        },
        pause: function () {
            null != this.timer && this.timer.pause();
            null != this.timerWaveDelay && this.timerWaveDelay.pause();
            this.timerGuideText.pause()
        },
        unpause: function () {
            null != this.timer && this.timer.unpause();
            null != this.timerWaveDelay && this.timerWaveDelay.unpause();
            this.timerGuideText.unpause()
        },
        update: function () {
            if (!this.paused && (this.parent(), !this.shouldNotSpawn)) {
                if (0 == this.alive.length && 0 == this.enemyGroup.length && !this.spawnCheck && this.gamePlay) {
                    this.spawnCheck = !0;
                    this.timerWaveDelay.reset();
                    var c = ig.game.spawnEntity(EntityDialogueWin, -500, -500);
                    if (0 < this.waveNo) {
                        var d = _STRINGS.Game.WaveComplete,
                            e = _STRINGS.Game.WaveComing;
                        c.text.above = d.substr(0, 5) + this.waveNo + d.substr(6, 9);
                        c.text.below = e.substr(0, 5) + (this.waveNo + 1) + e.substr(6, 9);
                        ig.soundHandler.sfxPlayer.play("wave_finished")
                    } else this.timerGuideText.reset(), this.showGuideText = !0;
                    c.moveIn()
                }
                0 == this.alive.length && 0 == this.enemyGroup.length && (0 < this.timerWaveDelay.delta() && this.gamePlay) && this.spawnWave(++this.waveNo);
                0 < this.enemyGroup.length && 0 < this.timer.delta() && (this.add(this.enemyGroup[0]), this.enemyGroup = 1 < this.enemyGroup.length ? this.enemyGroup.slice(1) : [], this.timer.reset(), this.spawnCheck && (this.spawnCheck = !1));
                this.showGuideText && 0 < this.timerGuideText.delta() && (this.showGuideText = !1)
            }
        },
        draw: function () {
            ig.ua.mobile || (this.guideTextAlpha = this.showGuideText ? 1 > this.guideTextAlpha ? this.guideTextAlpha + 0.02 : 1 : 0 < this.guideTextAlpha ? this.guideTextAlpha - 0.02 : 0, ig.system.context.fillStyle = "rgba(60,90,35," + this.guideTextAlpha.toString() + ")", ig.system.context.textAlign = "left", ig.system.context.font = "26pt squada-one-reg", ig.system.context.fillText(this.txtType, 75, 800), ig.system.context.fillText(this.txtSpace, 75, 845), ig.system.context.fillText(this.txtShift, 75, 890))
        },
        add: function (c, d, e, f) {
            c = ig.game.spawnEntity(c, d || -500, e || -500, f);
            c.zIndex = "air" == c.enemyType ? ++this.airZIndex : ++this.landZIndex;
            this.setAvailableWord(c);
            !d && !e && (c.pos.x = Math.floor(Math.random() * (ig.system.width - c.size.x - 100) + 100), c.pos.y = -c.size.y);
            this.alive.push(c);
            ig.game.sortEntitiesDeferred()
        },
        spawnWave: function (c) {
            for (var d = 0; d < 3 + Math.floor(c / 4); d++) this.enemyGroup.push(EntityEnemyBoat);
            for (d = 0; d < 2 + Math.floor(c / 4); d++) this.enemyGroup.push(EntityEnemyCorvette);
            for (d = 0; d < Math.floor((2 + c) / 5); d++) this.enemyGroup.push(EntityEnemyCarrier);
            for (d = 0; d < Math.floor((1 + c) / 5); d++) this.enemyGroup.push(EntityEnemyBattleCruiser);
            for (d = 0; d < Math.floor((c - 1) / 5); d++) this.enemyGroup.push(EntityEnemyDreadnought);
            for (d = 0; d < Math.floor((c + 2) / 4); d++) this.enemyGroup.push(EntityEnemyHeliSmall);
            for (d = 0; d < Math.floor((c + 1) / 5); d++) this.enemyGroup.push(EntityEnemyHeliMed);
            for (d = 0; d < Math.floor((c - 2) / 5); d++) this.enemyGroup.push(EntityEnemyHeliBig)
        },
        remove: function (c) {
            var d = this.alive.indexOf(c); - 1 != d && this.alive.splice(d, 1);
            c.kill()
        },
        setAvailableWord: function (c) {
            var d = _STRINGS.DICT[c.charLength],
                e = 0,
                e = Math.floor(Math.random() * d.length),
                e = d[e];
            c.setWord(e)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.turret").requires("impact.entity", "plugins.tween", "game.entities.game.muzzle-flash", "game.entities.common.dlg-lose", "game.entities.game.spawner").defines(function () {
    EntityTurret = ig.Entity.extend({
        size: {
            x: 76,
            y: 16
        },
        zIndex: 41E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/turret.png", 76, 16),
        bunker: new ig.Image("media/graphics/game/game/bunker.png", 458, 176),
        bunker2: new ig.Image("media/graphics/game/game/bunker2.png", 458, 176),
        healthBar0: new ig.Image("media/graphics/game/game/health_bar0.png"),
        healthBar1: new ig.Image("media/graphics/game/game/health_bar1.png"),
        targetAngle: 0,
        angle: 0,
        type: ig.Entity.TYPE.A,
        collideCheck: !0,
        isDead: !1,
        health: 32,
        blink: 4,
        blinkTimer: null,
        expNo: 0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.currentAnim.pivot.x = 0;
            this.currentAnim.pivot.y = 0.5 * this.size.y;
            this.currentAnim.angle = this.angle = this.targetAngle = -Math.PI / 2;
            this.flash = ig.game.spawnEntity(MuzzleFlash, -500, -500);
            this.healthBar = {
                x: ig.system.width / 2 - this.healthBar0.width / 2,
                y: 650
            };
            this.blinkTimer = new ig.Timer(0.12);
            this.img = this.bunker;
            this.explosionTimer = new ig.Timer(0)
        },
        update: function () {
            var c = this.angle - this.targetAngle;
            this.angle = 0.02 > Math.abs(c) ? this.targetAngle : this.angle - 10 * c * ig.system.tick;
            this.currentAnim.angle = this.angle;
            this.parent();
            this.flash.currentAnim && (this.flash.pos.x = this.pos.x + this.size.x * Math.cos(this.angle), this.flash.pos.y = this.pos.y + 1.05 * this.size.x * Math.sin(this.angle), this.flash.currentAnim.angle = this.angle);
            4 > this.blink && 0 <= this.blinkTimer.delta() && (this.blinkTimer.reset(), this.blink++, 0 == this.blink % 2 ? (this.currentAnim.alpha = 1, this.img = this.bunker) : (this.currentAnim.alpha = 0.8, this.img = this.bunker2));
            this.isDead && this.explosionTimer.delta() > this.expNo && 2.375 > this.expNo && (ig.game.spawnEntity(ExplosionBig, 440 * Math.random() - 105, 88 * Math.random() + 440), this.expNo += 0.25)
        },
        draw: function () {
            this.img.draw(42, 590);
            this.parent();
            this.healthBar0.draw(this.healthBar.x, this.healthBar.y);
            ig.system.context.drawImage(this.healthBar1.data, 0, 0, 247 * this.health / 32, 9, this.healthBar.x + 4, 653.5, 247 * this.health / 32, 9)
        },
        shoot: function (c) {
            this.target = c;
            this.targetAngle = this.angleTo(c);
            this.flash.play()
        },
        kill: function () {
            this.collideCheck && (this.collideCheck = !1, this.isDead = !0, this.explosionTimer.reset())
        },
        pause: function () {
            this.explosionTimer.pause();
            this.blinkTimer.pause()
        },
        unpause: function () {
            this.explosionTimer.unpause();
            this.blinkTimer.unpause()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.intro.intro_manager").requires("impact.entity", "game.entities.game.turret").defines(function () {
    EntityIntroManager = ig.Entity.extend({
        speed: 20,
        accel: 0,
        zIndex: 150,
        temp: 0,
        isMove: !0,
        increaseSpeed: !0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            for (c = 0; 5 > c; c++) ig.game.spawnEntity(EntityEnemyBattleCruiser, 20 + 104 * c, 20, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 5 > c; c++) ig.game.spawnEntity(EntityEnemyDreadnought, 20 + 104 * c, 370, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 6 > c; c++) ig.game.spawnEntity(EntityEnemyCarrier, 26 + 86 * c, 635, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 8 > c; c++) ig.game.spawnEntity(EntityEnemyCorvette, 33 + 63 * c, 903, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 10 > c; c++) ig.game.spawnEntity(EntityEnemyBoat, 27 + 51 * c, 1093, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 3 > c; c++) ig.game.spawnEntity(EntityEnemyHeliBig, 35 + 168 * c, 260, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 4 > c; c++) ig.game.spawnEntity(EntityEnemyHeliMed, 28 + 128 * c, 469, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 3 > c; c++) ig.game.spawnEntity(EntityEnemyHeliMed, 60 + 160 * c, 637, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 5 > c; c++) ig.game.spawnEntity(EntityEnemyHeliSmall, 22 + 104 * c, 805, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            for (c = 0; 3 > c; c++) ig.game.spawnEntity(EntityEnemyHeliSmall, 74 + 156 * c, 957, {
                zIndex: this.zIndex + 10,
                isIntro: !0,
                speed: 15
            });
            this.flash = ig.game.spawnEntity(MuzzleFlash, 270, 3270);
            this.flash.currentAnim.angle = -Math.PI / 2;
            this.flash.zIndex = this.zIndex + 5;
            ig.game.sortEntitiesDeferred()
        },
        update: function () {
            if (this.isMove && (this.increaseSpeed ? (this.accel += 0.03, this.speed += this.accel * (this.accel - 2), 900 <= this.speed && (this.increaseSpeed = !1)) : 2100 <= ig.game.screen.y && (this.speed -= 11.8, 50 >= this.speed && (this.speed = 50)), ig.game.screen.y += this.speed * ig.system.tick, 2700 <= ig.game.screen.y)) {
                ig.game.screen.y = 2700;
                this.isMove = !1;
                var c = 0,
                    d = setInterval(function () {
                        2 < ++c && clearInterval(d);
                        this.flash.play();
                        ig.soundHandler.sfxPlayer.play("turret")
                    }.bind(this), 350);
                setTimeout(function () {
                    ig.game.director.jumpTo(LevelGame)
                }.bind(this), 2E3)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.levels.intro").requires("impact.image", "game.entities.screen-fader", "game.entities.intro.bg_intro", "game.entities.intro.intro_manager", "game.entities.game.enemy-battle-cruiser", "game.entities.game.enemy-boat", "game.entities.game.enemy-carrier", "game.entities.game.enemy-corvette", "game.entities.game.enemy-dreadnought", "game.entities.game.enemy-heli-big", "game.entities.game.enemy-heli-med", "game.entities.game.enemy-heli-small").defines(function () {
    LevelIntro = {
        entities: [{
            type: "EntityPointer",
            x: 548,
            y: 16
        }, {
            type: "EntityScreenFader",
            x: 540,
            y: 4
        }, {
            type: "EntityBgIntro",
            x: 0,
            y: 0
        }, {
            type: "EntityIntroManager",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.game.explosion-big").requires("impact.entity").defines(function () {
    ExplosionBig = ig.Entity.extend({
        size: {
            x: 319,
            y: 314
        },
        zIndex: 50001,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/explosionbig.png", 319, 314),
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            this.spawner = ig.game.getEntitiesByType(EntitySpawner)[0];
            this.spawner.bomber ? (c = this.spawner.length, e = d = ig.soundHandler.sfxPlayer.getVolume(), 5 < c && (e = 5 * (d / c)), ig.soundHandler.sfxPlayer.volume(e), ig.soundHandler.sfxPlayer.play("explosion_big"), ig.soundHandler.sfxPlayer.volume(d)) : ig.soundHandler.sfxPlayer.play("explosion_big")
        },
        update: function () {
            this.parent();
            null != this.currentAnim && 8 == this.currentAnim.frame && this.kill()
        },
        pause: function () {
            this.currentFrame = this.currentAnim.frame
        },
        resume: function () {
            this.currentAnim.gotoFrame(this.currentFrame)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.explosion-small").requires("impact.entity").defines(function () {
    ExplosionSmall = ig.Entity.extend({
        size: {
            x: 95,
            y: 76
        },
        zIndex: 5E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/explosionsmall.png", 95, 76),
        currentFrame: 0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            this.spawner = ig.game.getEntitiesByType(EntitySpawner)[0];
            this.spawner.bomber ? (c = this.spawner.length, e = d = ig.soundHandler.sfxPlayer.getVolume(), 5 < c && (e = 5 * (d / c)), ig.soundHandler.sfxPlayer.volume(e), ig.soundHandler.sfxPlayer.play("explosion_small"), ig.soundHandler.sfxPlayer.volume(d)) : ig.soundHandler.sfxPlayer.play("explosion_small")
        },
        update: function () {
            this.parent();
            null != this.currentAnim && 8 == this.currentAnim.frame && this.kill()
        },
        pause: function () {
            this.currentFrame = this.currentAnim.frame
        },
        resume: function () {
            this.currentAnim.frame = this.currentFrame
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.option").requires("game.entities.buttons.button").defines(function () {
    EntityOptionBtn = EntityButton.extend({
        zIndex: 1E5,
        size: {
            x: 51,
            y: 51
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/option.png", 51, 51),
        i: 0,
        ignorePause: !0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function () {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.enabled = !1, ig.game.getEntitiesByType(EntityPlaybtn)[0].enabled = !1, ig.game.getEntitiesByType(EntityControlBtn)[0].enabled = !1, ig.game.getEntitiesByType(EntityButtonMoreGames)[0].hide(), this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("reload"))
        },
        clicking: function () { },
        released: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    ig.game.spawnEntity(EntityPauseMenu, -500, -500)
                }.bind(this)
            }).start())
        },
        leave: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.resume").requires("game.entities.buttons.button").defines(function () {
    EntityResumeBtn = EntityButton.extend({
        zIndex: 300001,
        size: {
            x: 140,
            y: 59
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/resume.png", 140, 59),
        ignorePause: !0,
        pauseMenu: null,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function () {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("reload"))
        },
        clicking: function () { },
        released: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    this.enabled = !1;
                    this.pauseMenu.moveOut()
                }.bind(this)
            }).start())
        },
        leave: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.slider").requires("impact.entity").defines(function () {
    EntitySlider = ig.Entity.extend({
        size: {
            x: 26,
            y: 27
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/slider.png", 26, 27),
        xLength: null,
        type: ig.Entity.TYPE.B,
        ignorePause: !0,
        name: "",
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.cons = this.xLength / 100;
            this.x0 = c - 10;
            this.x1 = this.x0 + this.xLength - 6;
            this.isClicked = !1;
            this.xTemp = this.pointerDx = 0;
            this.pos.x = c + 30;
            c = "sliderBgm" == this.name ? ig.game.storage.get("MarketJS_DTB_BgmLevel") : ig.game.storage.get("MarketJS_DTB_SfxLevel");
            this.pos.x = 100 * c * this.cons + this.x0;
            this.spawner = ig.game.getEntitiesByType(EntitySpawner)[0]
        },
        clicked: function () {
            this.isClicked = !0;
            this.pointerDx = ig.game.io.getClickPos().x - this.pos.x
        },
        clicking: function () { },
        released: function () {
            this.isClicked = !1;
            var c = (this.pos.x - this.x0) / this.xLength;
            if ("sliderBgm" == this.name) ig.game.storage.set("MarketJS_DTB_BgmLevel", c), ig.soundHandler.bgmPlayer.volume(0.7 * c);
            else if (ig.game.storage.set("MarketJS_DTB_SfxLevel", c), ig.soundHandler.sfxPlayer.volume(0.6 *
                c), null != this.spawner)
                for (var d = 0, e = this.spawner.alive.length; d < e; d++)("heli" == this.spawner.alive[d].sName || "ves" == this.spawner.alive[d].sName) && null != this.spawner.alive[d].sound && this.spawner.alive[d].sound.volume(0.6 * c)
        },
        releasedOutside: function () {
            this.released()
        },
        update: function () {
            this.parent();
            this.isClicked && (this.xTemp = ig.game.io.getClickPos().x - this.pointerDx, this.pos.x = this.xTemp >= this.x0 && this.xTemp <= this.x1 ? this.xTemp : this.xTemp < this.x0 ? this.x0 : this.x1)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.control-menu").requires("game.entities.buttons.resume", "game.entities.menu.slider").defines(function () {
    EntityControlMenu = ig.Entity.extend({
        size: {
            x: 348,
            y: 301
        },
        pos0: {},
        zIndex: 29E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/dialogue.jpg", 348, 301),
        slideBar0: new ig.Image("media/graphics/game/buttons/slide-bar0.png", 152, 15),
        slideBar: new ig.Image("media/graphics/game/buttons/slide-bar.png", 152, 15),
        text: {},
        ignorePause: !0,
        bgAlpha: 0,
        drawBg: !0,
        name: "control",
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.pos0.y = (ig.system.height - this.size.y) / 2;
            this.pos0.yu = -this.size.y - 10;
            this.pos0.yd = ig.system.height + 10;
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = this.pos0.yu;
            this.playBtn = ig.game.spawnEntity(EntityPlaybtn, this.pos.x + 184, this.pos.y + 227, {
                pauseMenu: this,
                zIndex: this.zIndex + 2
            });
            this.menu = ig.game.spawnEntity(EntityMenuBtn, this.pos.x + 22, this.pos.y + 227, {
                theParent: this,
                zIndex: this.zIndex + 1
            });
            this.text.title = _STRINGS.Game.Control;
            this.text.type =
                _STRINGS.Game.Type;
            this.text.enter = _STRINGS.Game.Enter;
            this.text.shift = _STRINGS.Game.Shift;
            this.text.space = _STRINGS.Game.Space;
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        draw: function () {
            this.bgAlpha = this.drawBg ? 0.7 > this.bgAlpha ? this.bgAlpha + 0.04 : 0.7 : 0.04 < this.bgAlpha ? this.bgAlpha - 0.04 : 0;
            ig.system.context.fillStyle = "rgba(0,0,0," + this.bgAlpha.toString() + ")";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent();
            this.drawText(this.text.title, ig.system.width / 2, this.pos.y + 45, "30pt squada-one-reg", "#F5F9FA", "center");
            this.drawText(this.text.type, this.pos.x + 30, this.pos.y + 90, "15pt Arial", "#FBFF7A");
            this.drawText(this.text.enter, this.pos.x + 30, this.pos.y + 125, "15pt Arial", "#FBFF7A");
            this.drawText(this.text.space, this.pos.x + 30, this.pos.y + 160, "15pt Arial", "#FBFF7A");
            this.drawText(this.text.shift, this.pos.x + 30, this.pos.y + 195, "15pt Arial", "#FBFF7A")
        },
        moveIn: function () {
            this.tween({
                pos: {
                    y: this.pos0.y
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Quadratic.EaseIn
            }).start()
        },
        moveOut: function () {
            this.drawBg = !1;
            this.tween({
                pos: {
                    y: this.pos0.yd
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function () {
                    ig.game.getEntitiesByType(EntityControlBtn)[0].enabled = !0;
                    this.kill()
                }.bind(this)
            }).start()
        },
        drawText: function (c, d, e, f, m, p) {
            ig.system.context.fillStyle = m || "#FFFFFF";
            ig.system.context.textAlign = p || "left";
            ig.system.context.font = f || "30pt squada-one-reg";
            ig.system.context.fillText(c, d || 0, e || 0)
        },
        update: function () {
            this.parent();
            this.playBtn.pos.y = this.menu.pos.y = this.pos.y + 227
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.control").requires("game.entities.buttons.button", "game.entities.menu.control-menu").defines(function () {
    EntityControlBtn = EntityButton.extend({
        zIndex: 1E5,
        size: {
            x: 51,
            y: 51
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/control.png", 51, 51),
        i: 0,
        ignorePause: !0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function () {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.enabled = !1, ig.game.getEntitiesByType(EntityPlaybtn)[0].enabled = !1, ig.game.getEntitiesByType(EntityOptionBtn)[0].enabled = !1, ig.game.getEntitiesByType(EntityButtonMoreGames)[0].hide(), this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("reload"))
        },
        clicking: function () { },
        released: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    ig.game.spawnEntity(EntityControlMenu, -500, -500)
                }.bind(this)
            }).start())
        },
        leave: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.menu-manager").requires("impact.entity", "game.entities.game.explosion-big", "game.entities.game.explosion-small", "game.entities.buttons.option", "game.entities.buttons.control").defines(function () {
    EntityMenuManager = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        init: function (c, d, e) {
            this.parent(c, d, e);
            ig.global.wm || ($(window).keypress(this.keypress.bind(this)), ig.game.spawnEntity(EntityOptionBtn, 483, 8), ig.ua.mobile || ig.game.spawnEntity(EntityControlBtn, 8, 8))
        },
        keypress: function (c) {
            13 == c.charCode && 1 == ig.game.director.currentLevel && ig.game.getEntitiesByType(EntityPlaybtn)[0].enabled && (ig.soundHandler.sfxPlayer.play("button_play"), ig.game.director.jumpTo(LevelIntro))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.playbtn").requires("game.entities.buttons.button").defines(function () {
    EntityPlaybtn = EntityButton.extend({
        zIndex: 750,
        size: {
            x: 138,
            y: 58
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/playbtn.png", 138, 58),
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        enabled: !0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function () {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("button_play"))
        },
        clicking: function () { },
        released: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    ig.game.director.jumpTo(LevelIntro)
                }
            }).start())
        },
        leave: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.levels.menu").requires("impact.image", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.screen-fader", "game.entities.menu.menu-manager", "game.entities.menu.playbtn").defines(function () {
    LevelMenu = {
        entities: [{
            type: "EntityButtonMoreGames",
            x: 178,
            y: 778
        }, {
            type: "EntityPointer",
            x: 540,
            y: 0
        }, {
            type: "EntityScreenFader",
            x: 540,
            y: 4
        }, {
            type: "EntityPlaybtn",
            x: 199,
            y: 693
        }, {
            type: "EntityMenuManager",
            x: -10,
            y: -10
        }],
        layer: [{
            name: "background",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, 31, 32, 33, 34, 35, 36],
                [37, 38, 39, 40, 41, 42, 43, 44, 45],
                [46, 47, 48, 49, 50, 51, 52, 53, 54],
                [55, 56, 57, 58, 59, 60, 61, 62, 63],
                [64, 65, 66, 67, 68, 69, 70, 71, 72],
                [73, 74, 75, 76, 77, 78, 79, 80, 81],
                [82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99],
                [100, 101, 102, 103, 104, 105, 106, 107, 108],
                [109, 110, 111, 112, 113, 114, 115, 116, 117],
                [118, 119, 120, 121, 122, 123, 124, 125, 126],
                [127, 128, 129, 130, 131, 132, 133, 134, 135],
                [136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelMenuResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("plugins.math.utils").defines(function () {
    MathUtils = ig.Class.extend({
        roundToTwoDecimals: function (c) {
            return Math.round(100 * (c + 1E-5)) / 100
        },
        countDecimals: function (c) {
            return Math.floor(c) === c ? 0 : c.toString().split(".")[1].length || 0
        },
        table: function (c, d, e, f, m, p) {
            for (var u = c.length, t = 0, l = 0, n = 0; n < u; n++) t = n % d, l = parseInt(n / d), c[n].pos.x = e + (c[n].size.x + m) * t, c[n].pos.y = f + (c[n].size.y + p) * l
        },
        getRandomProperty: function (c) {
            var d = Object.keys(c);
            return c[d[d.length * Math.random() << 0]]
        },
        hex2rgb: function (c) {
            c =
                c.replace("#", "");
            r = parseInt(c.substring(0, 2), 16);
            g = parseInt(c.substring(2, 4), 16);
            b = parseInt(c.substring(4, 6), 16);
            return result = {
                r: r,
                g: g,
                b: b
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.keypop").requires("impact.entity").defines(function () {
    EntityKeypop = ig.Entity.extend({
        size: {
            x: 54,
            y: 80
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/keypop.png", 54, 80),
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.temp = 0
        },
        update: function () {
            this.parent();
            0 < this.currentAnim.alpha && (this.temp = this.currentAnim.alpha - 0.08, this.currentAnim.alpha = 0 < this.temp ? this.temp : 0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.keypad").requires("impact.entity", "game.entities.common.keypop").defines(function () {
    Keypad = ig.Entity.extend({
        size: {
            x: 540,
            y: 287
        },
        gridSize: {
            x: 54,
            y: 96
        },
        zIndex: 5E4,
        spawner: null,
        type: ig.Entity.TYPE.A,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/keypad.png", 540, 287),
        keys: ["qwertyuiop".split(""), "asdfghjkl".split(""), " z x c v b n m".split(" ")],
        output: "",
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.addAnim("idle", 1, [0]);
            this.pop = ig.game.spawnEntity(EntityKeypop, -500, -500, {
                zIndex: this.zIndex + 2
            })
        },
        draw: function () {
            this.parent()
        },
        update: function () {
            this.parent()
        },
        clicked: function () {
            if (!this.spawner.paused && "play" == this.spawner.state) {
                var c = Math.floor((this.pointer.pos.y - this.pos.y) / this.gridSize.y),
                    d = -1;
                switch (c) {
                    case 0:
                        d = Math.floor((this.pointer.pos.x - this.pos.x) / this.gridSize.x);
                        this.output = this.keys[c][d];
                        this.movePop(this.pos.x + d * this.gridSize.x, this.pos.y + 8);
                        this.spawner.shoot(this.output);
                        this.spawner.typeTotal++;
                        break;
                    case 1:
                        d = Math.floor((this.pointer.pos.x - 0.5 * this.gridSize.x - this.pos.x) / this.gridSize.x);
                        0 <= d && 8 >= d && (this.output = this.keys[c][d], this.movePop(this.pos.x + d * this.gridSize.x + this.gridSize.x / 2, this.pos.y + 8 + this.gridSize.y), this.spawner.shoot(this.output), this.spawner.typeTotal++);
                        break;
                    case 2:
                        d = Math.floor((this.pointer.pos.x - 0.5 * this.gridSize.x - this.pos.x) / this.gridSize.x), 1 <= d && 7 >= d ? (this.output = this.keys[c][d], this.movePop(this.pos.x + d * this.gridSize.x + this.gridSize.x / 2, this.pos.y + 8 + c * this.gridSize.y),
                            this.spawner.shoot(this.output), this.spawner.typeTotal++) : 7 < d && (this.movePop(470, this.pos.y + 8 + c * this.gridSize.y), this.spawner.currentTarget && (this.spawner.currentTarget.isTargeted = !1, this.spawner.currentTarget = null, ig.soundHandler.sfxPlayer.play("reload")))
                }
            }
        },
        clicking: function () { },
        released: function () {
            this.output = ""
        },
        movePop: function (c, d) {
            this.pop.pos.x = c;
            this.pop.pos.y = d;
            this.pop.currentAnim.alpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.bomber").requires("impact.entity", "plugins.tween").defines(function () {
    EntityBomber = ig.Entity.extend({
        size: {
            x: 190,
            y: 265
        },
        pos0: {},
        posX: [],
        zIndex: 2E5,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/bomber.png", 190, 265),
        img: new ig.Image("media/graphics/game/game/bomber.png", 190, 265),
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.pos.x = this.pos0.x = (ig.system.width - this.size.x) / 2;
            this.posX = [this.pos.x - 150, this.pos.x + 150];
            this.pos.y = this.pos0.y =
                ig.system.height;
            this.moveUp();
            ig.soundHandler.sfxPlayer.play("bomber")
        },
        moveUp: function () {
            this.tween({
                pos: {
                    y: -this.size.y
                }
            }, 1.5, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function () {
                    this.kill()
                }.bind(this)
            }).start()
        },
        draw: function () {
            this.parent();
            this.img.draw(this.posX[0], this.pos.y + 130);
            this.img.draw(this.posX[1], this.pos.y + 130)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.air-strike-btn").requires("game.entities.buttons.button").defines(function () {
    EntityAirStrikeBtn = EntityButton.extend({
        zIndex: 1E5,
        size: {
            x: 49,
            y: 49
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/air_strike.png", 49, 49),
        manager: null,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.strikeNo = 3
        },
        clicked: function () {
            this.manager.paused || (this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("reload"))
        },
        clicking: function () { },
        released: function () {
            this.manager.paused || this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    this.boom()
                }.bind(this)
            }).start()
        },
        leave: function () {
            this.enabled && this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start()
        },
        draw: function () {
            this.parent();
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.font = "16pt mikadobold";
            ig.system.context.fillText(this.strikeNo.toString(), this.pos.x + this.size.x / 2, this.pos.y + this.size.y /
                2 + 5)
        },
        boom: function () {
            !this.manager.paused && 3 == ig.game.director.currentLevel && ("play" != this.manager.state ? ig.soundHandler.sfxPlayer.play("wrong_shot") : !this.manager.spawner.spawnCheck && null == ig.game.getEntitiesByType(EntityBomber)[0] && 0 < this.strikeNo ? (ig.game.spawnEntity(EntityBomber, -1E3, -1E3), this.strikeNo--, setTimeout(function () {
                this.manager.bomberKill()
            }.bind(this), 1300), ig.game.getEntitiesByType(EntityPauseBtn)[0].currentAnim.alpha = 0, ig.game.getEntitiesByType(EntityPauseBtn)[0].enabled = !1) : ig.soundHandler.sfxPlayer.play("wrong_shot"))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-manager").requires("impact.entity", "plugins.math.utils", "game.entities.game.keypad", "game.entities.game.bomber", "game.entities.game.air-strike-btn").defines(function () {
    EntityGameManager = ig.Entity.extend({
        size: {
            x: 50,
            y: 50
        },
        zIndex: 5E4,
        spawner: null,
        state: "play",
        currentTarget: null,
        streak: 0,
        hits: 0,
        misses: 0,
        multiplier: 1,
        kills: 0,
        emps: 0,
        wordList: null,
        shakeAmplitude: 0,
        ctx: null,
        typeRight: 0,
        typeTotal: 0,
        typeCombo: 0,
        longestCombo: 0,
        textAlpha: 0,
        showText: !1,
        paused: !1,
        bomber: !1,
        init: function (c, d, e) {
            this.parent(c, d, e);
            ig.global.wm || (this.spawner = ig.game.getEntitiesByType(EntitySpawner)[0], this.background = ig.game.getEntitiesByType(EntityBackground)[0], this.turret = ig.game.getEntitiesByType(EntityTurret)[0], this.spawner.start(), $(window).keypress(this.keypress.bind(this)), ig.input.bind(ig.KEY.SHIFT, "callBombers"), ig.input.bind(ig.KEY.ESC, "cancel"), ig.ua.mobile && (this.keypad = ig.game.spawnEntity(Keypad, 0, ig.system.height - 287, {
                spawner: this
            })), this.airStrikeBtn = ig.game.getEntitiesByType(EntityAirStrikeBtn)[0], this.airStrikeBtn.manager = this, this.pauseBtn = ig.game.getEntitiesByType(EntityPauseBtn)[0], this.pauseBtn.manager = this, this.ctx = ig.system.context, ig.game.sortEntitiesDeferred())
        },
        update: function () {
            this.paused || (this.updateShake(), this.parent(), this.turret.isDead && "play" == this.state && (this.state = "over", this.spawner.gamePlay = !1, setTimeout(function () {
                this.gameOver()
            }.bind(this), 1100)), ig.input.pressed("callBombers") && (ig.soundHandler.sfxPlayer.play("reload"), this.airStrikeBtn.boom()), ig.input.pressed("cancel") && this.currentTarget && (this.currentTarget.isTargeted = !1, this.currentTarget = null, ig.soundHandler.sfxPlayer.play("reload")))
        },
        draw: function () {
            this.paused || (0 < this.shakeAmplitude && this.ctx.translate(this.shakeAmplitude * (Math.random() - 0.5), this.shakeAmplitude * (Math.random() - 0.5)), this.parent(), this.textAlpha = this.showText ? 1 > this.textAlpha ? this.textAlpha + 0.05 : 1 : 0 < this.textAlpha ? this.textAlpha - 0.05 : 0, ig.system.context.fillStyle = "rgba(237,63,5," + this.textAlpha.toString() + ")", ig.system.context.textAlign = "left", ig.system.context.font = "30pt squada-one-reg", ig.system.context.fillText(this.spawner.scoreRate.toString() + "x", 15, 630))
        },
        updateShake: function () {
            0 < this.shakeAmplitude && (this.shakeAmplitude -= 1, 0 == this.shakeAmplitude && this.ctx.restore())
        },
        screenShake: function (c) {
            this.shakeAmplitude = c;
            this.ctx.save()
        },
        gameOver: function () {
            var c = ig.game.spawnEntity(EntityDialogueLose, -500, -500, {
                shouldMoveOut: !1
            });
            c.text.wave += this.spawner.waveNo;
            c.text.score = this.spawner.score.toString();
            c.text.accuracy = 0 == this.typeTotal ? "0%" : Math.round(100 * this.typeRight / this.typeTotal).toString() + "%";
            c.text.combo = this.longestCombo.toString();
            c.moveIn();
            this.spawner.gamePlay = !1;
            for (var c = 0, d = this.spawner.alive.length; c < d; c++) null != this.spawner.alive[c].sound && this.spawner.alive[c].sound.stop()
        },
        keypress: function (c) {
            if (!this.paused && 3 == ig.game.director.currentLevel && "play" == this.state) {
                var d = c.charCode;
                32 == d ? this.currentTarget && (this.currentTarget.isTargeted = !1, this.currentTarget = null, ig.soundHandler.sfxPlayer.play("reload")) : 64 > d || (c.stopPropagation(), c.preventDefault(), c = String.fromCharCode(d).toLowerCase(), this.shoot(c), this.typeTotal++)
            }
        },
        shoot: function (c) {
            this.paused || (this.currentTarget ? this.currentTarget.isHitBy(c) ? (this.turret.shoot(this.currentTarget), this.currentTarget.isDead && (this.screenShake("big" == this.currentTarget.enemySize ? 10 : 5), this.spawner.remove(this.currentTarget), this.currentTarget = null), this.typeRight++, this.comboHandle(), ig.soundHandler.sfxPlayer.play("turret")) : (this.typeCombo = 0, this.showText = !1, ig.soundHandler.sfxPlayer.play("wrong_shot")) : this.getPossibleTarget(c))
        },
        getPossibleTarget: function (c) {
            for (var d = !0, e = 0, f = this.spawner.alive.length; e < f; e++)
                if (this.spawner.alive[e].isHitBy(c)) {
                    this.currentTarget = this.spawner.alive[e];
                    this.typeRight++;
                    this.comboHandle();
                    this.turret.shoot(this.currentTarget);
                    ig.soundHandler.sfxPlayer.play("turret");
                    this.currentTarget.isDead ? (this.screenShake("big" == this.currentTarget.enemySize ? 10 : 5), this.spawner.remove(this.currentTarget), this.currentTarget = null) : (this.currentTarget.zIndex = 2E4, ig.game.sortEntitiesDeferred());
                    d = !1;
                    break
                }
            d && (this.typeCombo = 0, this.showText = !1, ig.soundHandler.sfxPlayer.play("wrong_shot"))
        },
        bomberKill: function () {
            if (0 != this.spawner.alive.length) {
                this.screenShake(12);
                var c = this.spawner.alive.length;
                this.spawner.bomber = !0;
                for (var d = 0; d < c; d++) this.spawner.alive[d].killedByBomber();
                this.spawner.bomber = !1;
                this.spawner.alive = [];
                this.currentTarget = null;
                setTimeout(function () {
                    ig.game.getEntitiesByType(EntityPauseBtn)[0].currentAnim.alpha = 0.6;
                    ig.game.getEntitiesByType(EntityPauseBtn)[0].enabled = !0
                }.bind(this), 1E3)
            }
        },
        comboHandle: function () {
            this.typeCombo++;
            this.typeCombo > this.longestCombo && (this.longestCombo = this.typeCombo);
            this.spawner.scoreRate = Math.floor(this.typeCombo / 20) + 1;
            1 < this.spawner.scoreRate && (this.showText = !0)
        },
        pause: function () {
            this.paused = !0
        },
        unpause: function () {
            this.paused = !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.background").requires("impact.entity", "plugins.tween").defines(function () {
    EntityBackground = ig.Entity.extend({
        size: {
            x: 540,
            y: 1460
        },
        zIndex: 0,
        land: new ig.Image("media/graphics/game/common/land.png", 540, 540),
        water: new ig.Image("media/graphics/game/common/water.png", 540, 540),
        divider: new ig.Image("media/graphics/game/common/divider.png", 540, 128),
        init: function (c, d, e) {
            this.parent(c, d, e)
        },
        draw: function () {
            this.parent();
            this.water.draw(0, 0);
            this.land.draw(0, 420);
            this.divider.draw(0, 370)
        },
        move: function () {
            3 > this.pos.y && this.tween({
                pos: {
                    y: this.pos.y + 3
                }
            }, 0.25).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.pause-menu").requires("game.entities.buttons.resume", "game.entities.menu.slider").defines(function () {
    EntityPauseMenu = ig.Entity.extend({
        size: {
            x: 348,
            y: 301
        },
        pos0: {},
        zIndex: 29E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/dialogue.jpg", 348, 301),
        slideBar0: new ig.Image("media/graphics/game/buttons/slide-bar0.png", 152, 15),
        slideBar: new ig.Image("media/graphics/game/buttons/slide-bar.png", 152, 15),
        text: {},
        ignorePause: !0,
        bgAlpha: 0,
        drawBg: !0,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.pos0.y = (ig.system.height - this.size.y) / 2;
            this.pos0.yu = -this.size.y - 10;
            this.pos0.yd = ig.system.height + 10;
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = this.pos0.yu;
            1 == ig.game.director.currentLevel ? (this.text.title = _STRINGS.Game.Option, this.optBtn = ig.game.spawnEntity(EntityPlaybtn, this.pos.x + 184, this.pos.y + 227, {
                pauseMenu: this,
                zIndex: this.zIndex + 2
            }), this.name = "menu") : (this.text.title = _STRINGS.Game.Pause, this.optBtn = ig.game.spawnEntity(EntityResumeBtn, this.pos.x +
                184, this.pos.y + 227, {
                pauseMenu: this,
                zIndex: this.zIndex + 2
            }), this.name = "pause");
            this.menu = ig.game.spawnEntity(EntityMenuBtn, this.pos.x + 22, this.pos.y + 227, {
                theParent: this,
                zIndex: this.zIndex + 1
            });
            this.text.Bgm = _STRINGS.Game.Music;
            this.text.Sfx = _STRINGS.Game.Sound;
            this.slideBarX = this.pos.x + 140;
            this.sliderBgm = ig.game.spawnEntity(EntitySlider, this.slideBarX, this.pos.y + 89, {
                xLength: this.slideBar.width,
                zIndex: this.zIndex + 3,
                name: "sliderBgm"
            });
            this.sliderSfx = ig.game.spawnEntity(EntitySlider, this.slideBarX, this.pos.y +
                156, {
                xLength: this.slideBar.width,
                zIndex: this.zIndex + 4,
                name: "sliderSfx"
            });
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        draw: function () {
            this.bgAlpha = this.drawBg ? 0.7 > this.bgAlpha ? this.bgAlpha + 0.04 : 0.7 : 0.04 < this.bgAlpha ? this.bgAlpha - 0.04 : 0;
            ig.system.context.fillStyle = "rgba(0,0,0," + this.bgAlpha.toString() + ")";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent();
            this.drawText(this.text.title, ig.system.width / 2, this.pos.y + 45, "30pt squada-one-reg", "#BCBCBC", "center");
            this.drawText(this.text.Bgm, this.pos.x + 48, this.pos.y + 108, "22pt squada-one-reg", "#F0F5F7");
            this.drawText(this.text.Sfx, this.pos.x + 48, this.pos.y + 175, "22pt squada-one-reg", "#F0F5F7");
            this.slideBar0.draw(this.slideBarX, this.pos.y + 93);
            ig.system.context.drawImage(this.slideBar.data, 0, 0, this.sliderBgm.pos.x - this.slideBarX, 15, this.slideBarX, this.pos.y + 93, this.sliderBgm.pos.x - this.slideBarX, 15);
            this.slideBar0.draw(this.slideBarX, this.pos.y + 160);
            ig.system.context.drawImage(this.slideBar.data, 0, 0, this.sliderSfx.pos.x - this.slideBarX, 15, this.slideBarX, this.pos.y + 160, this.sliderSfx.pos.x - this.slideBarX, 15)
        },
        moveIn: function () {
            this.tween({
                pos: {
                    y: this.pos0.y
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Quadratic.EaseIn
            }).start()
        },
        moveOut: function () {
            this.drawBg = !1;
            this.tween({
                pos: {
                    y: this.pos0.yd
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function () {
                    "menu" == this.name ? (ig.game.getEntitiesByType(EntityOptionBtn)[0].enabled = !0, this.kill()) : (ig.game.getEntitiesByType(EntityPauseBtn)[0].enabled = !0, this.unpauseGame())
                }.bind(this)
            }).start()
        },
        drawText: function (c, d, e, f, m, p) {
            ig.system.context.fillStyle = m || "#FFFFFF";
            ig.system.context.textAlign = p || "left";
            ig.system.context.font = f || "30pt squada-one-reg";
            ig.system.context.fillText(c, d || 0, e || 0)
        },
        update: function () {
            this.parent();
            this.optBtn.pos.y = this.menu.pos.y = this.pos.y + 227;
            this.sliderBgm.pos.y = this.pos.y + 89;
            this.sliderSfx.pos.y = this.pos.y + 156
        },
        unpauseGame: function () {
            ig.game.paused = !ig.game.paused;
            ig.game.getEntitiesByType(EntityGameManager)[0].unpause();
            var c = ig.game.getEntitiesByType(EntityBomber)[0],
                d = ig.game.getEntitiesByType(ExplosionSmall),
                e = ig.game.getEntitiesByType(ExplosionBig),
                f = ig.game.getEntitiesByType(EntitySpawner)[0],
                m = ig.game.getEntitiesByType(EntityDialogue)[0],
                p = ig.game.getEntitiesByType(EntityTurret)[0];
            null != c && c.resumeTweens();
            f.unpause();
            if (null != d) {
                c = 0;
                for (f = d.length; c < f; c++) d[c].resume()
            }
            if (null != e) {
                c = 0;
                for (f = e.length; c < f; c++) e[c].resume()
            }
            null != m && m.resumeTweens();
            p.unpause();
            this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.pause-btn").requires("game.entities.buttons.button", "game.entities.menu.pause-menu").defines(function () {
    EntityPauseBtn = EntityButton.extend({
        zIndex: 1E5,
        size: {
            x: 51,
            y: 51
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/buttons/pause.png", 51, 51),
        i: 0,
        ignorePause: !0,
        manager: null,
        init: function (c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle";
            this.currentAnim.alpha = 0.6
        },
        clicked: function () {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.enabled = !1, this.manager.pause(), this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("reload"))
        },
        clicking: function () { },
        released: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function () {
                    ig.game.paused = !0;
                    var c = ig.game.getEntitiesByType(EntityBomber)[0],
                        d = ig.game.getEntitiesByType(ExplosionSmall),
                        e = ig.game.getEntitiesByType(ExplosionBig),
                        f = ig.game.getEntitiesByType(EntitySpawner)[0],
                        m = ig.game.getEntitiesByType(EntityDialogue)[0],
                        p = ig.game.getEntitiesByType(EntityTurret)[0];
                    null != c && c.pauseTweens();
                    f.pause();
                    if (null != d) {
                        c = 0;
                        for (f = d.length; c < f; c++) d[c].pause()
                    }
                    if (null != e) {
                        c = 0;
                        for (f = e.length; c < f; c++) e[c].pause()
                    }
                    null != m && m.pauseTweens();
                    p.pause();
                    ig.game.spawnEntity(EntityPauseMenu, -500, -500)
                }.bind(this)
            }).start())
        },
        leave: function () {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.screen-fader", "game.entities.game.spawner", "game.entities.game.game-manager", "game.entities.common.background", "game.entities.pointer", "game.entities.buttons.pause-btn", "game.entities.game.turret").defines(function () {
    LevelGame = {
        entities: [{
            type: "EntityPointer",
            x: 548,
            y: 16
        }, {
            type: "EntityScreenFader",
            x: 540,
            y: 4
        }, {
            type: "EntityBackground",
            x: 0,
            y: 0
        }, {
            type: "EntityTurret",
            x: 270,
            y: 605
        }, {
            type: "EntitySpawner",
            x: 548,
            y: 48
        }, {
            type: "EntityPauseBtn",
            x: 483,
            y: 8
        }, {
            type: "EntityAirStrikeBtn",
            x: 20,
            y: 891
        }, {
            type: "EntityGameManager",
            x: 550,
            y: 80
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.fake-storage", "plugins.entity-scaling", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.intro", "game.levels.menu", "game.levels.game").defines(function () {
    var q6b = {
        'Z': (function (g) {
            var e = {},
                B = function (f, L) {
                    var I = L & 0xffff;
                    var M = L - I;
                    return ((M * f | 0) + (I * f | 0)) | 0;
                },
                o = (function () { }).constructor(new g("tgvwtp\"fqewogpv0fqockp=").J(2))(),
                p = function (K, O, V) {
                    if (e[V] !== undefined) {
                        return e[V];
                    }
                    var Q = 0xcc9e2d51,
                        F = 0x1b873593;
                    var G = V;
                    var m = O & ~0x3;
                    for (var C = 0; C < m; C += 4) {
                        var j = (K.charCodeAt(C) & 0xff) | ((K.charCodeAt(C + 1) & 0xff) << 8) | ((K.charCodeAt(C + 2) & 0xff) << 16) | ((K.charCodeAt(C + 3) & 0xff) << 24);
                        j = B(j, Q);
                        j = ((j & 0x1ffff) << 15) | (j >>> 17);
                        j = B(j, F);
                        G ^= j;
                        G = ((G & 0x7ffff) << 13) | (G >>> 19);
                        G = (G * 5 + 0xe6546b64) | 0;
                    }
                    j = 0;
                    switch (O % 4) {
                        case 3:
                            j = (K.charCodeAt(m + 2) & 0xff) << 16;
                        case 2:
                            j |= (K.charCodeAt(m + 1) & 0xff) << 8;
                        case 1:
                            j |= (K.charCodeAt(m) & 0xff);
                            j = B(j, Q);
                            j = ((j & 0x1ffff) << 15) | (j >>> 17);
                            j = B(j, F);
                            G ^= j;
                    }
                    G ^= O;
                    G ^= G >>> 16;
                    G = B(G, 0x85ebca6b);
                    G ^= G >>> 13;
                    G = B(G, 0xc2b2ae35);
                    G ^= G >>> 16;
                    e[V] = G;
                    return G;
                },
                t = function (n, v, l) {
                    var u;
                    var z;
                    if (l > 0) {
                        u = o.substring(n, l);
                        z = u.length;
                        return p(u, z, v);
                    } else if (n === null || n <= 0) {
                        u = o.substring(0, o.length);
                        z = u.length;
                        return p(u, z, v);
                    }
                    u = o.substring(o.length - n, o.length);
                    z = u.length;
                    return p(u, z, v);
                };
            return {
                B: B,
                p: p,
                t: t
            };
        })(function (R) {
            this.R = R;
            this.J = function (r) {
                var E = new String();
                for (var P = 0; P < R.length; P++) {
                    E += String.fromCharCode(R.charCodeAt(P) - r);
                }
                return E;
            }
        })
    };

    MyGame = ig.Game.extend({
        paused: false,
        io: null,
        init: function () {
            this.setupMarketJsGameCenter();

            this.io = new IoManager();
            this.setupUrlParams = new ig.UrlParameters();
            this.setupLocalStorage();
            this.setupControls();
            this.removeLoadingWheel();
            this.initAudio();
            this.finalize();
        },
        setupLocalStorage: function () {
            this.storage = new ig.FakeStorage();

            this.storage = this.storage.convert();
            if (this.storage.get('MarketJS_DTB_BgmLevel') == null) this.storage.set('MarketJS_DTB_BgmLevel', 0.7);
            if (this.storage.get('MarketJS_DTB_SfxLevel') == null) this.storage.set('MarketJS_DTB_SfxLevel', 0.6);
        },
        setupMarketJsGameCenter: function () {

            if (_SETTINGS) {
                if (_SETTINGS['MarketJSGameCenter']) {
                    var el = ig.domHandler.getElementByClass('gamecenter-activator');
                    if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                            console.log('MarketJSGameCenter activator settings present ....');
                            ig.domHandler.css(el, {
                                position: "absolute",
                                left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                "z-index": 3
                            });
                        }
                    }
                    ig.domHandler.show(el);
                } else {
                    console.log('MarketJSGameCenter settings not defined in game settings');
                }
            }

        },
        initAudio: function () {

            if (this.io.storage.get('dtb-bgm')) {
                ig.soundHandler.unmuteBGM(true);
            } else {
                ig.soundHandler.muteBGM(true);
            }

            if (this.io.storage.get('dtb-sfx')) {
                ig.soundHandler.unmuteSFX(true);
            } else {
                ig.soundHandler.muteSFX(true);
            }
        },
        finalize: function () {

            if (ig.ua.mobile) {
                var elem = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                ig.domHandler.show(elem);
            } else {
                this.start();
            }
            ig.sizeHandler.reorient();

        },
        removeLoadingWheel: function () {
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err);
            }

        },
        showDebugMenu: function () {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();

        },
        start: function () {
            this.resetPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelIntro, LevelGame]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelIntro, LevelGame]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            if (ig.ua.mobile) {
                this.spawnEntity(EntityPointerSelector, 50, 50);
            }
            var vol = ig.game.storage.get('MarketJS_DTB_BgmLevel');
            if (vol == null) {
                ig.soundHandler.bgmPlayer.volume(0.7);
            } else {
                ig.soundHandler.bgmPlayer.volume(vol * 0.7);
            }
            var vol2 = ig.game.storage.get('MarketJS_DTB_SfxLevel');
            if (vol2 == null) {
                ig.soundHandler.sfxPlayer.volume(0.6);
            } else {
                ig.soundHandler.sfxPlayer.volume(vol2 * 0.6);
            }
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            ig.soundHandler.sfxPlayer.soundList["helicopter"].loop(true);
            ig.soundHandler.sfxPlayer.soundList["vessel"].loop(true);
        },
        fpsCount: function () {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function () {
            console.log('End game');
            ig.soundHandler.bgmPlayer.stop();
            ig.apiHandler.run("MJSEnd");
        },
        resetPlayerStats: function () {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setupControls: function () {

            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');

        },
        splashClick: function () {
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();
        },
        pauseGame: function () {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function () {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function (divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
            this.pauseGame();
        },
        hideOverlay: function (divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
            this.resumeGame();
        },
        currentBGMVolume: 1,
        addition: 0.1,
        update: function () {
            this.parent();
            if (ig.ua.mobile && ig.soundHandler) {
                ig.soundHandler.forceLoopBGM();
            }
        },
        draw: function () {
            this.parent();
            this.drawDebug();
        },
        clearCanvas: function (ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        },
        drawDebug: function () {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function (consoleLog) {

            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);

        },
        debugEnable: function () {

            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }

        },
        updateEntities: function () {

            for (var i = 0; i < this.entities.length; i++) {
                var ent = this.entities[i];
                if (this.paused) {
                    if (!ent._killed && ent.ignorePause) {
                        ent.update();
                    }
                } else {
                    if (!ent._killed) {
                        ent.update();
                    }
                }
            }

        },
        moveCamera: function () {
            this.screen.y += 30;
        }
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();
    Array
});