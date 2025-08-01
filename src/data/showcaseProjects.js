const showcaseProjects = [
  // SEC-00 Projects (Foundational/Reference)
  {
    name: "Highlighter",
    description:
      "A nostr client & NIP for sharing and discovering highlights from books, articles, and more.",
    cohort: "SEC-00",
    link: "https://highlighter.com/",
    linkText: "highlighter.com",
    logo: "",
    highlight: false,
  },
  {
    name: "Lightning Prisms",
    description:
      "Programmable value splits for Lightning payments. See blog post for details.",
    cohort: "SEC-00",
    link: "https://dergigi.com/2023/03/12/lightning-prisms/",
    linkText: "dergigi.com/2023/03/12/lightning-prisms/",
    logo: "",
    highlight: false,
  },
  {
    name: "NIP-90: Data Vending Machines",
    description:
      "Nostr protocol extension for on-demand computation and data vending. See NIP and reference site.",
    cohort: "SEC-00",
    link: "https://nips.nostr.com/90",
    linkText: "nips.nostr.com/90",
    logo: "",
    highlight: false,
    extraLinks: [
      {
        link: "https://www.data-vending-machines.org/",
        linkText: "data-vending-machines.org",
      },
    ],
  },

  // SEC-01 Projects (Jan-Mar 2024)
  {
    name: "Blossom",
    description:
      "A specification for HTTP endpoints that allow users to store blobs of data on publicly accessible servers",
    cohort: "SEC-01",
    link: "https://github.com/hzrd149/blossom",
    linkText: "github.com/hzrd149/blossom",
    logo: "/images/showcase/blossom-logo.png",
    highlight: true,
  },
  {
    name: "npub.cash",
    description:
      "A nostr native Lightning Address service that provides Lightning addresses for everyone using Cashu eCash",
    cohort: "SEC-01",
    link: "https://npub.cash/",
    linkText: "npub.cash",
    logo: "/images/showcase/npub-cash-logo.jpg",
    highlight: false,
  },
  {
    name: "Nostr-idb",
    description:
      "Collection of helper methods for storing nostr events in IndexedDB",
    cohort: "SEC-01",
    link: "https://github.com/hzrd149/nostr-idb",
    linkText: "github.com/hzrd149/nostr-idb",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Blossom Drive",
    description:
      "A cloud drive built using blossom servers and nostr for decentralized file storage",
    cohort: "SEC-01",
    link: "https://github.com/hzrd149/blossom-drive",
    linkText: "github.com/hzrd149/blossom-drive",
    logo: "/images/showcase/blossom-logo.png",
    highlight: false,
  },
  {
    name: "Wikifreedia",
    description:
      "Wikipedia on nostr enables a myriad of interesting and novel concepts that have captured the imagination of people outside the freedom tech ecosystem, including the founder of Wikipedia itself. Wikifreedia was born within SEC-01 with the radical idea of, instead of reducing bias in canonical wiki entries, a readily apparent pursuit, embrace bias and make it technologically impossible for a canonical entry to exist. Truth via the integration of opposites.",
    cohort: "SEC-01",
    link: "https://github.com/pablof7z/wikifreedia",
    linkText: "github.com/pablof7z/wikifreedia",
    logo: "/images/showcase/nostr-logo.png",
    highlight: true,
  },
  {
    name: "noStrudel on StartOS",
    description:
      "noStrudel nostr client packaged for StartOS self-sovereign computing platform",
    cohort: "SEC-01",
    link: "https://github.com/hzrd149/nostrudel-startos",
    linkText: "github.com/hzrd149/nostrudel-startos",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "nsecBunker on StartOS",
    description:
      "nsecBunker remote signing service packaged for StartOS platform",
    cohort: "SEC-01",
    link: "https://github.com/hzrd149/nsecbunker-startos",
    linkText: "github.com/hzrd149/nsecbunker-startos",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "featurestr-bountiestr",
    description: "Feature request and bounty system built on nostr protocol",
    cohort: "SEC-01",
    link: "https://github.com/sebdeveloper6952/featurestr-bountiestr",
    linkText: "github.com/sebdeveloper6952/featurestr-bountiestr",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "go-dvm",
    description: "Go implementation of Data Vending Machine (DVM) for nostr",
    cohort: "SEC-01",
    link: "https://github.com/sebdeveloper6952/godvm",
    linkText: "github.com/sebdeveloper6952/godvm",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Malware DVMs",
    description:
      "Data Vending Machines for malware analysis and security services",
    cohort: "SEC-01",
    link: "https://github.com/sebdeveloper6952/malware.dvms.app",
    linkText: "github.com/sebdeveloper6952/malware.dvms.app",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Wasm DVM",
    description: "WebAssembly-based Data Vending Machine with plugin system",
    cohort: "SEC-01",
    link: "https://github.com/benthecarman/wasm-dvm/",
    linkText: "github.com/benthecarman/wasm-dvm",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Note Duel",
    description: "Competitive note-taking and content creation platform",
    cohort: "SEC-01",
    link: "https://noteduel.com",
    linkText: "noteduel.com",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "GitPear",
    description: "Git-based collaboration tool with nostr integration",
    cohort: "SEC-01",
    link: "https://github.com/dzdidi/gitpear",
    linkText: "github.com/dzdidi/gitpear",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Nostrocket",
    description:
      "Decentralized organization and project management platform on nostr",
    cohort: "SEC-01",
    link: "https://nostrocket.org",
    linkText: "nostrocket.org",
    logo: "/images/showcase/nostrocket-logo.png",
    highlight: false,
  },
  {
    name: "Gonuts",
    description: "Cashu mint implementation in Go for eCash functionality",
    cohort: "SEC-01",
    link: "https://github.com/elnosh/gonuts",
    linkText: "github.com/elnosh/gonuts",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "keyNest",
    description: "Secure key management solution for nostr",
    cohort: "SEC-01",
    link: "https://github.com/gzuuus/keynest",
    linkText: "github.com/gzuuus/keynest",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "LowEnt",
    description:
      "Anonymous chat and messaging platform based on low entropy keys",
    cohort: "SEC-01",
    link: "https://github.com/gzuuus/lowent",
    linkText: "github.com/gzuuus/lowent",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },

  // SEC-02 Projects (May-Jun 2024)
  {
    name: "Nsite",
    description:
      "Host static websites on Nostr using blossom servers for storage and nostr relays for mapping",
    cohort: "SEC-02",
    link: "https://nsite.run/",
    linkText: "nsite.run",
    logo: "/images/showcase/nostr-logo.png",
    highlight: true,
  },
  {
    name: "NIP-60",
    description:
      "Nutsacks: enable any and all nostr apps to match the convenience of a built-in KYC wallet, minus the KYC, while supercharging the wallet with the same interoperability freedom tech users expect: receive money in one app, spend in another, seamlessly.",
    cohort: "SEC-02",
    link: "https://nips.nostr.com/60",
    linkText: "nips.nostr.com/60",
    logo: "/images/showcase/lightning-logo.png",
    highlight: true,
  },
  {
    name: "NIP-61",
    description:
      "Nutzaps: Receiving—and verifying— zaps, has always been a weak point in nostr. Nutzaps have enabled a new, more straightforward and verifiable way to participate in the zap-economy.",
    cohort: "SEC-02",
    link: "https://nips.nostr.com/61",
    linkText: "nips.nostr.com/61",
    logo: "/images/showcase/lightning-logo.png",
    highlight: false,
  },
  {
    name: "Sov.Biz",
    description: "Sovereign business platform for decentralized commerce",
    cohort: "SEC-02",
    link: "http://Sov.Biz",
    linkText: "sov.biz",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "cypher.space",
    description: "Privacy-focused communication and collaboration platform",
    cohort: "SEC-02",
    link: "https://cypher.space/",
    linkText: "cypher.space",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "PubPay",
    description:
      "Public key-based payment system for seamless Bitcoin transactions",
    cohort: "SEC-02",
    link: "https://pubpay.me/",
    linkText: "pubpay.me",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "SatShoot",
    description: "Freelancing on nostr",
    cohort: "SEC-02",
    link: "https://github.com/Pleb5/satshoot",
    linkText: "github.com/Pleb5/satshoot",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "Tollgate",
    description:
      "Pay-as-you-go internet access on open networks powered by Bitcoin Lightning and eCash",
    cohort: "SEC-02",
    link: "https://tollgate.me/",
    linkText: "tollgate.me",
    logo: "/images/showcase/tollgate-logo.webp",
    highlight: true,
  },
  {
    name: "Zapstore",
    description:
      "Decentralized marketplace for Lightning Network payments and nostr integration",
    cohort: "SEC-01",
    link: "https://zapstore.dev/",
    linkText: "zapstore.dev",
    logo: "/images/zapstore.svg",
    highlight: true,
  },
  {
    name: "Kartapio",
    description: "Restaurant menu and ordering system with Bitcoin payments",
    cohort: "SEC-02",
    link: "https://github.com/vstabile/kartapio",
    linkText: "github.com/vstabile/kartapio",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "Sigit",
    description: "Digital signature and document verification platform",
    cohort: "SEC-02",
    link: "https://sigit.io/",
    linkText: "sigit.io",
    logo: "/images/showcase/sigit-logo.png",
    highlight: false,
  },
  {
    name: "Shopstr",
    description: "Decentralized marketplace with NIP-60/61 Cashu integration",
    cohort: "SEC-02",
    link: "https://shopstr.store/",
    linkText: "shopstr.store",
    logo: "/images/showcase/shopstr-logo.png",
    highlight: false,
  },
  {
    name: "OpenBalance",
    description: "Open-source accounting and financial management platform",
    cohort: "SEC-02",
    link: "https://openbalance.app/",
    linkText: "openbalance.app",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },

  // SEC-03 Projects (Oct-Dec 2024)
  {
    name: "Safebox",
    description: "Secure storage solution for Bitcoin and nostr keys",
    cohort: "SEC-03",
    link: "https://github.com/Nostr-Safebox/safebox",
    linkText: "github.com/Nostr-Safebox/safebox",
    logo: "/images/showcase/safebox-logo.png",
    highlight: false,
  },
  {
    name: "Nutstash Design",
    description: "User interface design for Cashu eCash wallet applications",
    cohort: "SEC-03",
    link: "https://www.nutstash.app/",
    linkText: "nutstash.app",
    logo: "/images/showcase/nutstash-logo.png",
    highlight: false,
  },
  {
    name: "Novia",
    description:
      "Social platform built on nostr with enhanced privacy features",
    cohort: "SEC-03",
    link: "https://github.com/teamnovia/novia",
    linkText: "github.com/teamnovia/novia",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Bolt12 prisms",
    description: "Lightning Network payment splitting and distribution system",
    cohort: "SEC-03",
    link: "https://www.roygbiv.guide/",
    linkText: "roygbiv.guide",
    logo: "/images/showcase/lightning-logo.png",
    highlight: false,
  },
  {
    name: "Alphaama",
    description:
      "Advanced nostr client with enhanced features and functionality",
    cohort: "SEC-01",
    link: "https://github.com/eskema/alphaama",
    linkText: "github.com/eskema/alphaama",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "nostr-epoxy",
    description:
      "Reverse proxy for nostr relays with enhanced performance and caching",
    cohort: "SEC-03",
    link: "https://github.com/Origami74/nostr-epoxy-reverse-proxy",
    linkText: "github.com/Origami74/nostr-epoxy-reverse-proxy",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Plebeian Market",
    description: "A content management system and marketplace that provides normies and communities infrastructure for circular economies and the move towards localisation",
    cohort: "SEC-04",
    link: "https://plebeian.market/",
    linkText: "plebeian.market",
    logo: "/images/showcase/plebeian-logo.png",
    highlight: false,
  },
  {
    name: "mimoty",
    description: "A personal relay which is also a remote signing service for nostr",
    cohort: "SEC-03",
    link: "https://github.com/gzuuus/mimoty",
    linkText: "github.com/gzuuus/mimoty",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "note mixer relay",
    description: "A Nostr relay that mixes and anonymizes events using the Khatru framework.",
    cohort: "SEC-03",
    link: "https://github.com/gzuuus/note-mixer-relay",
    linkText: "github.com/gzuuus/note-mixer-relay",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },

  // SEC-04 Projects (Mar-Apr 2025)
  {
    name: "castr.me",
    description: "Effortlessly turn any npub into a podcast feed.",
    cohort: "SEC-04",
    link: "https://github.com/dergigi/castr.me",
    linkText: "github.com/dergigi/castr.me",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "soveng/nsite",
    description: "Auto-deploy your GitHub page to nsite",
    cohort: "SEC-04",
    link: "https://github.com/soveng/nsite",
    linkText: "github.com/soveng/nsite",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "rust-multiplatform",
    description: "Rust framework for building cross-platform applications",
    cohort: "SEC-04",
    link: "https://github.com/justinmoon/rust-multiplatform",
    linkText: "github.com/justinmoon/rust-multiplatform",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "DVMCP",
    description:
      "Bridge implementation that connects Model Context Protocol (MCP) servers to Nostr's Data Vending Machine (DVM) ecosystem",
    cohort: "SEC-04",
    link: "https://github.com/gzuuus/dvmcp/",
    linkText: "github.com/gzuuus/dvmcp/",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "next.nostr.watch",
    description:
      "Next-generation nostr relay monitoring and analytics platform",
    cohort: "SEC-04",
    link: "https://next.nostr.watch/",
    linkText: "next.nostr.watch",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "NIP-66",
    description: "Relay monitoring and discovery specification for nostr network health",
    cohort: "SEC-01",
    link: "https://nips.nostr.com/66",
    linkText: "nips.nostr.com/66",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "spryte",
    description: "Lightweight nostr client library and toolkit",
    cohort: "SEC-04",
    link: "https://github.com/sandwichfarm/spryte",
    linkText: "github.com/sandwichfarm/spryte",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Cassette",
    description:
      "WASM-based Nostr relay implementation for the Cassette platform",
    cohort: "SEC-04",
    link: "https://github.com/dskvr/cassette",
    linkText: "github.com/dskvr/cassette",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Hypernote",
    description: "A hypermedia system built on nostr",
    cohort: "SEC-04",
    link: "https://www.hypernote.club/",
    linkText: "hypernote.club",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "gitworkshop.dev",
    description: "GitHub Actions integration and workflow automation platform",
    cohort: "SEC-04",
    link: "https://gitworkshop.dev/",
    linkText: "gitworkshop.dev",
    logo: "/images/showcase/gitworkshop-logo.png",
    highlight: false,
  },
  {
    name: "wavefunc.live",
    description: "Nostr-native hub for internet radio stations",
    cohort: "SEC-04",
    link: "https://wavefunc.live/",
    linkText: "wavefunc.live",
    logo: "/images/showcase/wavefunc-logo.png",
    highlight: false,
  },
  {
    name: "nsite manager",
    description: "Management interface for nsite static website hosting",
    cohort: "SEC-04",
    link: "https://github.com/hzrd149/nsite-manager",
    linkText: "github.com/hzrd149/nsite-manager",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "Olas",
    description: "Photo-sharing client on nostr.",
    cohort: "SEC-04",
    link: "https://olas.app",
    linkText: "https://olas.app",
    logo: "https://olas.app/favicon.png",
    highlight: false,
  },
  {
    name: "TENEX",
    description:
      "Orchestrate the orchestrators. Autonomous, agentic learning through distributed cognition through nostr.",
    cohort: "SEC-04",
    link: "https://github.com/pablof7z/tenex",
    linkText: "https://github.com/pablof7z/tenex",
    logo: "https://github.com/pablof7z/tenex/blob/master/docs/images/readme.png?raw=true",
    highlight: false,
  },
  {
    name: "sec.membler.club",
    description: "Community platform for Sovereign Engineering cohort members",
    cohort: "SEC-04",
    link: "https://sec.membler.club/",
    linkText: "sec.membler.club",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
  {
    name: "nostr wallet app",
    description: "Mobile wallet application with Cashu eCash integration",
    cohort: "SEC-04",
    link: "https://github.com/hvmelo/cashu_app",
    linkText: "github.com/hvmelo/cashu_app",
    logo: "/images/showcase/bitcoin-logo.png",
    highlight: false,
  },
  {
    name: "next block",
    description: "Bitcoin block explorer and network analysis platform",
    cohort: "SEC-04",
    link: "https://joinnextblock.com/",
    linkText: "joinnextblock.com",
    logo: "/images/showcase/nextblock-logo.png",
    highlight: false,
  },
  {
    name: "nutmoji",
    description: "Cashu eCash wallet with emoji-based token representation",
    cohort: "SEC-04",
    link: "https://wallet.cashu.me/",
    linkText: "wallet.cashu.me",
    logo: "/images/showcase/cashu-nutmoji-logo.png",
    highlight: false,
  },
  {
    name: "Totem",
    description: "Decentralized identity and reputation system",
    cohort: "SEC-03",
    link: "https://github.com/totemize",
    linkText: "github.com/totemize",
    logo: "/images/showcase/nostr-logo.png",
    highlight: false,
  },
];

export default showcaseProjects;
