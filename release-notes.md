:robot: I have created a release *beep* *boop*
---


<details><summary>@franken/brain: 0.7.0</summary>

## [0.7.0](https://github.com/djm204/frankenbeast/compare/@franken/brain-v0.6.6...@franken/brain-v0.7.0) (2026-07-06)


### Features

* **brain:** add SqliteBrain implementation with serialize/hydrate (Phase 2.2) ([11b7cf0](https://github.com/djm204/frankenbeast/commit/11b7cf0d97b541e0fe51cc66eb75d024259221d2))
* **brain:** implement keyword-based episodic recall with LIKE escaping (Phase 2.3) ([2935709](https://github.com/djm204/frankenbeast/commit/2935709650c5779371694f2a7baeccd4c776c78d))
* **brain:** keyword-based episodic recall (Phase 2.3) ([d122c58](https://github.com/djm204/frankenbeast/commit/d122c587a832065b1c38043843cea1b59f432a85))
* **brain:** SqliteBrain implementation with serialize/hydrate (Phase 2.2) ([f933824](https://github.com/djm204/frankenbeast/commit/f93382433780009edb2d5f14eae8172769f29daa))
* close launch parity gaps ([#284](https://github.com/djm204/frankenbeast/issues/284)) ([7309143](https://github.com/djm204/frankenbeast/commit/7309143648bba36b0788c0b44446455c9a61821a))
* **consolidation:** Phase 1  remove 5 packages (13’8) ([2eac09c](https://github.com/djm204/frankenbeast/commit/2eac09c64e515d3b5007b1e39d3f73d7b3bdf12b))
* **consolidation:** remove 5 packages, absorb comms into orchestrator (Phase 1) ([1ee949d](https://github.com/djm204/frankenbeast/commit/1ee949d761c4eaf507858f63cccb68e0522bb8b1))


### Bug Fixes

* **brain:** bound working memory growth with configurable limits ([#322](https://github.com/djm204/frankenbeast/issues/322)) ([08bd1e3](https://github.com/djm204/frankenbeast/commit/08bd1e3d942a5716435c0180961302d18f5c81c1))
* **brain:** flush working memory to SQLite on recovery checkpoint ([e4fab04](https://github.com/djm204/frankenbeast/commit/e4fab044a7ee30274c2b6287c6b83a1ebb904dfe))
* **brain:** hydrate sqlite working memory ([#478](https://github.com/djm204/frankenbeast/issues/478)) ([67ec25e](https://github.com/djm204/frankenbeast/commit/67ec25e6570f9ba8a0ac02208acea95d47206013))
* **deps:** resolve npm audit vulnerabilities ([6dbbf99](https://github.com/djm204/frankenbeast/commit/6dbbf99940b08a39397ff5ac588357b58cb87932)), closes [#517](https://github.com/djm204/frankenbeast/issues/517)
* **packaging:** pin internal package deps ([#763](https://github.com/djm204/frankenbeast/issues/763)) ([3603eac](https://github.com/djm204/frankenbeast/commit/3603eac5e23e2e95ee9c622c162fdd72b8ab33bb))
* replace console log statements ([#797](https://github.com/djm204/frankenbeast/issues/797)) ([ef5225f](https://github.com/djm204/frankenbeast/commit/ef5225f7e61196945d481ed40181f86aaea0f40d))
* residual one-shots (comms cleanup, HITL test, checkpoint flush, PROGRESS.md) ([e105db3](https://github.com/djm204/frankenbeast/commit/e105db3fe067c6473d3f2a4bc43fc85756487018))
* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))


### Refactoring

* **brain:** delete legacy episodic memory and types ([c627d6a](https://github.com/djm204/frankenbeast/commit/c627d6ae2e878f454dbbeacda32974c2d12ea393))
* **brain:** delete legacy episodic memory and types ([e620c62](https://github.com/djm204/frankenbeast/commit/e620c622d3fb25b338e5ce7e5417f82be61163d0))
* **brain:** delete old brain code, promote SqliteBrain (Phase 2.4) ([69ec240](https://github.com/djm204/frankenbeast/commit/69ec24042ca8229b71719e585aa75bf76b5acefd))
* **brain:** delete old brain code, promote SqliteBrain (Phase 2.4) ([080ae32](https://github.com/djm204/frankenbeast/commit/080ae3205bb1286d69a8decdd02a0873cc37ef19))


### Miscellaneous

* add architecture docs and update brain packaging ([38652e9](https://github.com/djm204/frankenbeast/commit/38652e967f4065c199c187650add570cebdaedea))
* **node:** align workspace engine constraints ([dcf5c4e](https://github.com/djm204/frankenbeast/commit/dcf5c4e90ca594f4ff282ea37c0a0d14000a39af)), closes [#757](https://github.com/djm204/frankenbeast/issues/757)
* **packages:** align publishable package licenses ([#783](https://github.com/djm204/frankenbeast/issues/783)) ([398d37c](https://github.com/djm204/frankenbeast/commit/398d37c552954a94d08d90fce9ff76573b9ec664))
* release main ([41acdbe](https://github.com/djm204/frankenbeast/commit/41acdbe09c990c38ade8209b3283b4405399dcda))
* release main ([19664bb](https://github.com/djm204/frankenbeast/commit/19664bb4baf0e8e0acb4c7042bcfee7f0799526b))
* release main ([29f20c7](https://github.com/djm204/frankenbeast/commit/29f20c74d7e5b0d5633188d1c6aa14eb189d0cc8))
* release main ([f388c96](https://github.com/djm204/frankenbeast/commit/f388c9636e6b34f63dde32314cfada9935a52370))
* release main ([d428ecd](https://github.com/djm204/frankenbeast/commit/d428ecd6e627d5c3c48cd0ef98c45a8eeca56d3e))
* release main ([55f726e](https://github.com/djm204/frankenbeast/commit/55f726e1af6e84f3401fd5ad14f452e7ac727f22))
* release main ([4ee81c5](https://github.com/djm204/frankenbeast/commit/4ee81c571b79f98e41e6b9531336b7781592e680))
* release main ([4e4ab4c](https://github.com/djm204/frankenbeast/commit/4e4ab4c4c7cde525fef815c057bae24f2c6b34c5))
* release main ([#285](https://github.com/djm204/frankenbeast/issues/285)) ([5544c28](https://github.com/djm204/frankenbeast/commit/5544c28d035c0d770e96890e54675a5260892e58))
* release main ([#337](https://github.com/djm204/frankenbeast/issues/337)) ([1f819ef](https://github.com/djm204/frankenbeast/commit/1f819ef9f239137df6977bfbe57442d256a1d2a6))
* release main ([#448](https://github.com/djm204/frankenbeast/issues/448)) ([8c9934f](https://github.com/djm204/frankenbeast/commit/8c9934f4adbd05b1ebae48081a3b3406746a1bc3))
* release main ([#482](https://github.com/djm204/frankenbeast/issues/482)) ([66f5641](https://github.com/djm204/frankenbeast/commit/66f56417de1252b572fba1f11db008c0a21a34df))
* release main ([#537](https://github.com/djm204/frankenbeast/issues/537)) ([41d70dd](https://github.com/djm204/frankenbeast/commit/41d70dde60bbbc0983702fc2ebfb63ee0528aa53))
* release main ([#554](https://github.com/djm204/frankenbeast/issues/554)) ([660250e](https://github.com/djm204/frankenbeast/commit/660250e5a21616955b05386eea741f17363c9198))
* release main ([#723](https://github.com/djm204/frankenbeast/issues/723)) ([767f8e2](https://github.com/djm204/frankenbeast/commit/767f8e2d347d1c4757db921e8689170f7fa9a9f1))


### Documentation

* fix package README drift (governor, observer, brain, critique) ([#527](https://github.com/djm204/frankenbeast/issues/527)) ([4afdd51](https://github.com/djm204/frankenbeast/commit/4afdd51f0852cfb934c6db1307e61afc98ee51c4))
* refresh accuracy against implementation ([#393](https://github.com/djm204/frankenbeast/issues/393)) ([e5a6088](https://github.com/djm204/frankenbeast/commit/e5a6088cddec35b5ac9c55b60323ff0c55663486))
* update RAMP_UP files across all packages to reflect current integration status ([a6f9f62](https://github.com/djm204/frankenbeast/commit/a6f9f627373e426278eaa98471d3f78da8064d26))
* update RAMP_UP for all packages with accurate integration status ([78220d6](https://github.com/djm204/frankenbeast/commit/78220d6ffb22720eae325f2f3f94823e6a29a463))


### Tests

* delete 26 fluff test files (~283 tests) identified by audit ([03358d4](https://github.com/djm204/frankenbeast/commit/03358d4cdc745197e48b61855ed77571a37a2939))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/types bumped from 0.7.5 to 0.7.6
</details>

<details><summary>franken-critique: 0.6.11</summary>

## [0.6.11](https://github.com/djm204/frankenbeast/compare/franken-critique-v0.6.10...franken-critique-v0.6.11) (2026-07-06)


### Bug Fixes

* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/types bumped from 0.7.5 to 0.7.6
</details>

<details><summary>franken-governor: 0.5.9</summary>

## [0.5.9](https://github.com/djm204/frankenbeast/compare/franken-governor-v0.5.8...franken-governor-v0.5.9) (2026-07-06)


### Bug Fixes

* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))


### Tests

* **governor:** cover factory and sandbox user policy ([#817](https://github.com/djm204/frankenbeast/issues/817)) ([48325c4](https://github.com/djm204/frankenbeast/commit/48325c4d1d86706295ef4a365b3d16b80e4a4817)), closes [#645](https://github.com/djm204/frankenbeast/issues/645)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/types bumped from 0.7.5 to 0.7.6
</details>

<details><summary>live-bench: 0.2.1</summary>

## [0.2.1](https://github.com/djm204/frankenbeast/compare/live-bench-v0.2.0...live-bench-v0.2.1) (2026-07-06)


### Bug Fixes

* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/observer bumped from 0.7.10 to 0.7.11
</details>

<details><summary>franken-mcp-suite: 0.2.1</summary>

## [0.2.1](https://github.com/djm204/frankenbeast/compare/franken-mcp-suite-v0.2.0...franken-mcp-suite-v0.2.1) (2026-07-06)


### Bug Fixes

* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/types bumped from 0.7.5 to 0.7.6
    * @franken/brain bumped from 0.6.6 to 0.7.0
    * @franken/critique bumped from 0.6.10 to 0.6.11
    * @franken/governor bumped from 0.5.8 to 0.5.9
    * @franken/observer bumped from 0.7.10 to 0.7.11
    * @franken/orchestrator bumped from 0.39.1 to 0.40.0
    * @franken/planner bumped from 0.4.8 to 0.4.9
</details>

<details><summary>franken-observer: 0.7.11</summary>

## [0.7.11](https://github.com/djm204/frankenbeast/compare/franken-observer-v0.7.10...franken-observer-v0.7.11) (2026-07-06)


### Bug Fixes

* **observer:** remove replay test mutator from production class ([#820](https://github.com/djm204/frankenbeast/issues/820)) ([f00094b](https://github.com/djm204/frankenbeast/commit/f00094b1464c0d80fdefa545f56e35bb084ce0d4))
* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))
</details>

<details><summary>@franken/orchestrator: 0.40.0</summary>

## [0.40.0](https://github.com/djm204/frankenbeast/compare/@franken/orchestrator-v0.39.1...@franken/orchestrator-v0.40.0) (2026-07-06)


### Features

* add skill directory equivalents for beast definitions ([789b567](https://github.com/djm204/frankenbeast/commit/789b567207768e639d6f4cc9c9ef5bcf95882566))
* add skill directory equivalents for beast definitions ([b63d31f](https://github.com/djm204/frankenbeast/commit/b63d31fbbfd5108e2c22207a62a6d46fb2160040))
* **beasts:** add BeastEventBus with sequence IDs and replay buffer ([6851710](https://github.com/djm204/frankenbeast/commit/68517105fda4513733f40414eb0ac4fc3c19b62f))
* **beasts:** add ProcessCallbacks to ProcessSupervisor with output capture and registry ([5d67738](https://github.com/djm204/frankenbeast/commit/5d6773817776254f7b636de2c5d68c239a9e8f54))
* **beasts:** add resolveCliEntrypoint utility ([8c956ca](https://github.com/djm204/frankenbeast/commit/8c956ca73b0b8ada868bc6ec05a0b09fe7660e63))
* **beasts:** add RunConfigSchema and RunConfigLoader with Zod validation ([10d0864](https://github.com/djm204/frankenbeast/commit/10d0864d502bec3b7a978e77ed36ae2b7f7372a7))
* **beasts:** add SSE routes with connection ticket auth ([8641b32](https://github.com/djm204/frankenbeast/commit/8641b328014bb11ad601959adbff8453ede55d99))
* **beasts:** add SseConnectionTicketStore with single-use tickets and TTL ([69c4390](https://github.com/djm204/frankenbeast/commit/69c4390ac84f6fe6d89552ca1ecd36d2c6d8fc87))
* **beasts:** config file passthrough to spawned processes ([8fe66bb](https://github.com/djm204/frankenbeast/commit/8fe66bb537d4f31337397493a5b361eac0887d86))
* **beasts:** error reporting to dashboard ([a6d9cea](https://github.com/djm204/frankenbeast/commit/a6d9ceac7618d560e2d3da2fb8246a6e377f1efd))
* **beasts:** error reporting to dashboard with spawn failure handling and SIGTERM timeout ([990577c](https://github.com/djm204/frankenbeast/commit/990577c31c93fad8b45a1aa8b159849e62221399))
* **beasts:** expose notifyRunStatusChange on BeastRunService ([daa25fa](https://github.com/djm204/frankenbeast/commit/daa25fa9ab26bd5459c5e7e88731fda690241f9c))
* **beasts:** ProcessSupervisor exit handling + output capture ([6c2600f](https://github.com/djm204/frankenbeast/commit/6c2600fb8a92a57a02e879ce3a60d745120cc3e8))
* **beasts:** replace chunk-plan stub with real CLI spawn ([b368ad3](https://github.com/djm204/frankenbeast/commit/b368ad3970d59d1a3d5a343a7a785d33ce381184))
* **beasts:** replace design-interview stub with real CLI spawn ([d58f7b1](https://github.com/djm204/frankenbeast/commit/d58f7b1b1e0e661fa4b59557f5a8fec888fbe04a))
* **beasts:** replace martin-loop stub with real CLI spawn ([12acef2](https://github.com/djm204/frankenbeast/commit/12acef26756000f81bef3851a4b46f263742762f))
* **beasts:** replace stub buildProcessSpec with real CLI spawns ([2307c0c](https://github.com/djm204/frankenbeast/commit/2307c0cd55c6f8704b5363e76630fd9e6ec0026b))
* **beasts:** SSE event bus + connection tickets (Chunk 06) ([436dca9](https://github.com/djm204/frankenbeast/commit/436dca9567fae9cafcc4178f54c9ab07f2149455))
* **beasts:** wire BeastEventBus into RunService and ProcessBeastExecutor ([8b442bf](https://github.com/djm204/frankenbeast/commit/8b442bf3328ebc3002baefb45fa8beaa8b70b091))
* **beasts:** wire ProcessCallbacks through ProcessBeastExecutor to persistence ([c902168](https://github.com/djm204/frankenbeast/commit/c902168034d659b0428920483190ed8b69d81312))
* **beasts:** wire ProcessCallbacks through ProcessBeastExecutor to persistence ([a2ce1ba](https://github.com/djm204/frankenbeast/commit/a2ce1bacb0d769d212a7bd75321d6eb4ab21dc7e))
* **beasts:** write configSnapshot to JSON file before spawn and clean up on exit ([a010200](https://github.com/djm204/frankenbeast/commit/a010200d5fb5e6e958e201ff4a7471e5248a6a0d))
* **cli:** add franken and frkn as CLI aliases ([b651cd5](https://github.com/djm204/frankenbeast/commit/b651cd543408ba2e574f3da236d3c75d4354f2f5))
* **cli:** load RunConfig from env in session startup path ([e58844f](https://github.com/djm204/frankenbeast/commit/e58844f2fdfd648a9d62c5c72ef4373a91706e91))
* **cli:** wire RunConfig overrides into dep-factory ([a3831b8](https://github.com/djm204/frankenbeast/commit/a3831b823ab6e65dd9d8d2c5ac577d3cbd243ffd))
* close launch parity gaps ([#284](https://github.com/djm204/frankenbeast/issues/284)) ([7309143](https://github.com/djm204/frankenbeast/commit/7309143648bba36b0788c0b44446455c9a61821a))
* **comms:** enable Telegram and WhatsApp runtime transports ([#526](https://github.com/djm204/frankenbeast/issues/526)) ([bb4368b](https://github.com/djm204/frankenbeast/commit/bb4368b728c2a730004c6cfff27c7e4f8d878de9))
* complete dual-mode launch chunks 6-8 and fix adapter wrapping ([#282](https://github.com/djm204/frankenbeast/issues/282)) ([b86792d](https://github.com/djm204/frankenbeast/commit/b86792dac542751035d676230e7481238329a974))
* complete MCP launch chunks 1-5 and canonicalize .fbeast storage ([#279](https://github.com/djm204/frankenbeast/issues/279)) ([22c8ac3](https://github.com/djm204/frankenbeast/commit/22c8ac3ffea24c5a252ab466277ec63261d1ed2d))
* **consolidation:** Phase 1  remove 5 packages (13’8) ([2eac09c](https://github.com/djm204/frankenbeast/commit/2eac09c64e515d3b5007b1e39d3f73d7b3bdf12b))
* **consolidation:** remove 5 packages, absorb comms into orchestrator (Phase 1) ([1ee949d](https://github.com/djm204/frankenbeast/commit/1ee949d761c4eaf507858f63cccb68e0522bb8b1))
* dashboard SSE routes and web UI panels ([0c8c8e0](https://github.com/djm204/frankenbeast/commit/0c8c8e0520be173cd921edda6c424cc41e7b1292))
* **franken-orchestrator:** add hybrid llm cache primitives ([c929e29](https://github.com/djm204/frankenbeast/commit/c929e29875460703f002b2ec28d738a243d986ec))
* **franken-orchestrator:** add intelligent LLM caching ([c00307c](https://github.com/djm204/frankenbeast/commit/c00307c91c7612f38aa86962f07d04e7feec6b61))
* **franken-orchestrator:** cache repeated planning and issue prompts ([89b3591](https://github.com/djm204/frankenbeast/commit/89b3591b3b92213f14129f60d4cce3b40b15b941))
* **observer:** add audit trail schema, replayer, persistence (Phase 7) ([6ffef1f](https://github.com/djm204/frankenbeast/commit/6ffef1ff67dfaa4fb6ac8f402036f1d22b871c92))
* **observer:** durable audit replay ([#299](https://github.com/djm204/frankenbeast/issues/299)) ([34ddc5a](https://github.com/djm204/frankenbeast/commit/34ddc5aa6b17ac6ae87f714e1342a101d7ecd195))
* **orchestrator:** add 6 adapter classes + createBeastDeps (Phase 8.1+8.2) ([b18d93b](https://github.com/djm204/frankenbeast/commit/b18d93be8d03b3da22a1eb86aa418d40e51775a1))
* **orchestrator:** add 6 provider adapters + shared handoff (Phase 3.3-3.8) ([58f5f10](https://github.com/djm204/frankenbeast/commit/58f5f1016a644160046d7cc38e3c147d2cde76a1))
* **orchestrator:** add CLI container beast mode ([0178c1d](https://github.com/djm204/frankenbeast/commit/0178c1d8f5fde156bec747b032a36cd49736e251))
* **orchestrator:** add comms config, token aggregation, delete EpisodicMemoryPortAdapter ([5eba2a8](https://github.com/djm204/frankenbeast/commit/5eba2a8bb5a9867c10fee361dec59c6112c18bfe))
* **orchestrator:** add comms run-config schema (Phase 4.5.04) ([0d7cd30](https://github.com/djm204/frankenbeast/commit/0d7cd309c79f54bdb1a485f072287b4b8c50f193))
* **orchestrator:** add credential store + health checker (Phase 5.9, 5.10) ([ac1a2bd](https://github.com/djm204/frankenbeast/commit/ac1a2bd4c6d8fe5f21081718e4f18c7112dbd571))
* **orchestrator:** add cross-provider token aggregation (Phase 3.10) ([39e2cae](https://github.com/djm204/frankenbeast/commit/39e2caef4464ee389aeafef40ca5438f5f04cbf0))
* **orchestrator:** add dashboard aggregation routes with SSE stream ([f2310e7](https://github.com/djm204/frankenbeast/commit/f2310e7fa401848f84a80374e5abce72856929a8))
* **orchestrator:** add dep-bridge for CliDepOptions ’ BeastDepsConfig mapping ([bb849ce](https://github.com/djm204/frankenbeast/commit/bb849ce946b538d1e030108356e9897df4411d7a))
* **orchestrator:** add domain allowlist middleware (Phase 4.4) ([854dce4](https://github.com/djm204/frankenbeast/commit/854dce48336c3b26bfef156a0b6b21b0fce26810))
* **orchestrator:** add E2E consolidated deps test + run-config v2 (Phase 8.5, 8.7) ([25a48ed](https://github.com/djm204/frankenbeast/commit/25a48ed4f2e731f0a3db03022fc21e17df7c69de))
* **orchestrator:** add LLM middleware chain + 3 middleware (Phase 4.2) ([ba1c2a1](https://github.com/djm204/frankenbeast/commit/ba1c2a11acdd28c66146814b3db32c0185345695))
* **orchestrator:** add provider skill translation + auth resolver (Phase 5.3, 5.4) ([f227431](https://github.com/djm204/frankenbeast/commit/f227431fcd132d00423b88a36fb169d9a0693fb4))
* **orchestrator:** add provider-aware outbound formatting (Phase 4.5.02) ([351e060](https://github.com/djm204/frankenbeast/commit/351e0605bab988b380a9cf3c11be1c82b6beff26))
* **orchestrator:** add ProviderRegistry with failover logic (Phase 3.2) ([3725cee](https://github.com/djm204/frankenbeast/commit/3725cee04c4445986862b0b088225243ce0e6ad3))
* **orchestrator:** add reflection runtime trigger (Phase 6.2) ([8ff8933](https://github.com/djm204/frankenbeast/commit/8ff89331e14a3ea4233eb2c9037b59ef805ede80))
* **orchestrator:** add security profiles + API routes (Phase 4.3) ([f516985](https://github.com/djm204/frankenbeast/commit/f51698522db5460f34554c27202e4196ef88817c))
* **orchestrator:** add skill API routes + context endpoints (Phase 5.6, 5.7, 5.11) ([b2804a2](https://github.com/djm204/frankenbeast/commit/b2804a2213cdea54d3e1bfda3c222cea96fb5ff6))
* **orchestrator:** add skill/provider/security/dashboard CLI commands ([23bcc2f](https://github.com/djm204/frankenbeast/commit/23bcc2f8a788f7acac26045108eea0f7e401de11))
* **orchestrator:** add skill/provider/security/dashboard CLI commands ([cd1ac1b](https://github.com/djm204/frankenbeast/commit/cd1ac1b189af357f59dbdbb8e5b8dde2a90f9509))
* **orchestrator:** add SkillConfigStore for persistent skill toggle state ([4920421](https://github.com/djm204/frankenbeast/commit/492042128980080976271f5dec76d2b6908de7c6))
* **orchestrator:** add SkillConfigStore for persistent skill toggle state ([05a5191](https://github.com/djm204/frankenbeast/commit/05a5191ab0a3f6a98cca32de5d700be727418acb))
* **orchestrator:** add SkillManager core CRUD (Phase 5.2) ([992105d](https://github.com/djm204/frankenbeast/commit/992105dceec8f661b93cc2b34f1876c5198288a2))
* **orchestrator:** add standalone beast daemon ([#477](https://github.com/djm204/frankenbeast/issues/477)) ([6b770a4](https://github.com/djm204/frankenbeast/commit/6b770a48f33d05e0c91a9b32800499e95049ade1))
* **orchestrator:** allow disabling PR creator branding ([91f6161](https://github.com/djm204/frankenbeast/commit/91f6161673a307fa06f520a457421541bbc5c19a))
* **orchestrator:** beast mode hardening  explicit resume, fail-closed deps, verification matrix ([#292](https://github.com/djm204/frankenbeast/issues/292)) ([c0dd018](https://github.com/djm204/frankenbeast/commit/c0dd01899fd429e4b80bfb85218f0f98890cc136))
* **orchestrator:** harden sandbox container execution ([849d87c](https://github.com/djm204/frankenbeast/commit/849d87ceb27377736af98ebfd26950ea108426af))
* **orchestrator:** intelligent LLM caching with work-scoped isolation ([b2d4e87](https://github.com/djm204/frankenbeast/commit/b2d4e870fb43f2dc91a887e058ccc06d961c0d4e))
* **orchestrator:** isolate beast processes in git worktrees ([efbe11e](https://github.com/djm204/frankenbeast/commit/efbe11e86fa032f2f1b360b954cea8a20a8bd8ba)), closes [#494](https://github.com/djm204/frankenbeast/issues/494)
* **orchestrator:** last-mile wiring  activate consolidation components in production runtime ([#275](https://github.com/djm204/frankenbeast/issues/275)) ([d318813](https://github.com/djm204/frankenbeast/commit/d318813518c99aede74aedc3ed9c4577cec114f4))
* **orchestrator:** mount skill routes in chat-app when skillManager provided ([9ae5889](https://github.com/djm204/frankenbeast/commit/9ae58893669c4a4c837ed5aad1cd7df1a22970ce))
* **orchestrator:** pass commsConfig through startChatServer to createChatApp ([fba06ca](https://github.com/djm204/frankenbeast/commit/fba06ca4f4b6024ec3010aeee660eb91be8de636))
* **orchestrator:** replace ChatSocketBridge with direct ChatRuntime (Phase 4.5.01) ([6879e26](https://github.com/djm204/frankenbeast/commit/6879e26574e7efeb7940553c8d0c489c243382e2))
* **orchestrator:** security profile integration for webhook verification (Phase 4.5.03) ([5c9c6ca](https://github.com/djm204/frankenbeast/commit/5c9c6caced4563e0150774a6595614c8bb41a1ac))
* **orchestrator:** wire container chat dispatch ([#468](https://github.com/djm204/frankenbeast/issues/468)) ([94d0f5e](https://github.com/djm204/frankenbeast/commit/94d0f5e7a55a09e8aa540ce0f9832b975af2e9de))
* **orchestrator:** wire critique module in dep-factory with fallback ([add4b1f](https://github.com/djm204/frankenbeast/commit/add4b1ffda6a1611662e5a0eab28e52f3741d855))
* **orchestrator:** wire discoverSkills into CLI adapters (Phase 5.5) ([fb06baa](https://github.com/djm204/frankenbeast/commit/fb06baaf6f2669f105a59f0d34496d6a83a3112b))
* **orchestrator:** wire execution recovery loop ([#553](https://github.com/djm204/frankenbeast/issues/553)) ([099067f](https://github.com/djm204/frankenbeast/commit/099067faa067414763b83376501fd87722ef0da9))
* **orchestrator:** wire governor module in dep-factory with HITL channel and fallback ([931da7f](https://github.com/djm204/frankenbeast/commit/931da7f8e53729e99a6f1aa6e5221c471559444b))
* Phase 3  Provider Registry + Adapters ([0ceb582](https://github.com/djm204/frankenbeast/commit/0ceb582f95a7ac7cac877adeb6b08bbe4aa9efd1))
* Phase 4  Security Middleware ([2f4112b](https://github.com/djm204/frankenbeast/commit/2f4112bac8f0d8940ef141f64c7229c397535eea))
* Phase 4.5  Comms Integration ([a3e8053](https://github.com/djm204/frankenbeast/commit/a3e80537a5e1413aab5cedd976c9d6724e796266))
* Phase 5  Skill Loading ([bc99631](https://github.com/djm204/frankenbeast/commit/bc99631f27cd2ea1b4072e19998b3fc89eb389b0))
* Phase 6  Absorb Reflection into Critique ([82ac47d](https://github.com/djm204/frankenbeast/commit/82ac47d6a67763a622f2d24058e6c30dbe989c46))
* Phase 7  Observer Audit Trail ([ea50e97](https://github.com/djm204/frankenbeast/commit/ea50e97b7b4d88c3a0e7261be8d5b08bb630441e))
* Phase 8  Wire Everything Together (Core) ([12d5293](https://github.com/djm204/frankenbeast/commit/12d52933d8ac27d5b2d46a24229fc94cf3c8c7d9))
* Plan 1  Foundation Execution Pipeline ([bc4cc63](https://github.com/djm204/frankenbeast/commit/bc4cc63b958dfe1d9763056f69b5495b7272b73e))
* **web:** add beast execution mode selection ([#469](https://github.com/djm204/frankenbeast/issues/469)) ([be44a79](https://github.com/djm204/frankenbeast/commit/be44a79b26d8c8dd2fcef0626e42541d78d6736d))
* **web:** add observer analytics dashboard ([#286](https://github.com/djm204/frankenbeast/issues/286)) ([a375ec3](https://github.com/djm204/frankenbeast/commit/a375ec3c484f03bb67260050931609332d62bdd8))
* **web:** stream beast run status and logs ([ef86e02](https://github.com/djm204/frankenbeast/commit/ef86e02776d6398e9b12e94480ec2e15e073692b))
* wire critique and governor modules in dep-factory (Tiers 3-4) ([8d55339](https://github.com/djm204/frankenbeast/commit/8d553399167860bad06a03c85e5b6045a0fb8b1e))


### Bug Fixes

* address 10 review issues on dashboard chunk ([037a57a](https://github.com/djm204/frankenbeast/commit/037a57a2538682233612143e02f289cd88a19cb2))
* address 10 review issues on dashboard chunk ([df52d71](https://github.com/djm204/frankenbeast/commit/df52d7152350c03f741f64ee55ee802da1da81b6))
* address codex sandbox and route follow-ups ([cda3cce](https://github.com/djm204/frankenbeast/commit/cda3ccec1ae728ec75f38bdb93069245bdcf8bd9))
* **api:** share web DTO contracts ([#544](https://github.com/djm204/frankenbeast/issues/544)) ([ec1e29a](https://github.com/djm204/frankenbeast/commit/ec1e29ae21bed03d156f0a58c0f27964566e5e80))
* **beasts:** add projectRoot to configSchema, strengthen env assertions ([8e4ba77](https://github.com/djm204/frankenbeast/commit/8e4ba7745070d2070dcc022d39754e9a7ed610c4))
* **beasts:** address PR [#241](https://github.com/djm204/frankenbeast/issues/241) review findings ([ffa9329](https://github.com/djm204/frankenbeast/commit/ffa9329e39d3901a0110a464e2a819dc38f7820a))
* **beasts:** buffer early exit events and handle null code/signal edge case ([dc899c1](https://github.com/djm204/frankenbeast/commit/dc899c14999b476c50e642c71b95b5b6eaead1b0))
* **beasts:** enable auto-dispatch for design-interview definition ([6cb16e1](https://github.com/djm204/frankenbeast/commit/6cb16e11ffd7f1a34e6707ed1b5f29dda8aae48a))
* **beasts:** fix stop() double-write, duplicate agent events, and spec compliance ([ad2c981](https://github.com/djm204/frankenbeast/commit/ad2c98199988612fe4478888a3b310e218998317))
* **beasts:** make ProcessCallbacks required, fix readline drain race condition ([5509d06](https://github.com/djm204/frankenbeast/commit/5509d0634daba29afa91bea11878a573a98cc307))
* **beasts:** resolve 3 high-severity discrepancies from Pass 7 audit ([bdc0f2c](https://github.com/djm204/frankenbeast/commit/bdc0f2cc4f1a85c3037c4e1b5c56143f30fd35ad))
* **beasts:** resolve all DISCREPANCIES.md findings from Plan 1 ([5679beb](https://github.com/djm204/frankenbeast/commit/5679beb7c72fb4adad3aa946af7f4879f0eab086))
* **beasts:** resolve all Pass 6 Deep Audit findings (R1-R8) ([a9eac61](https://github.com/djm204/frankenbeast/commit/a9eac6144d012928c013a5e4fbcb29a803fc9213))
* **beasts:** resolve Pass 4/5 truth audit findings ([ba0908b](https://github.com/djm204/frankenbeast/commit/ba0908be6512cc0161d648cc1ed4de81823adeab))
* **cli:** align RunConfigSchema with spec, fix module passthrough and error handling ([9873dfa](https://github.com/djm204/frankenbeast/commit/9873dfa570ef094171dcb21329b4d36efa91d38c))
* **cli:** auto-detect smart resume state ([#543](https://github.com/djm204/frankenbeast/issues/543)) ([461b5c0](https://github.com/djm204/frankenbeast/commit/461b5c0db7686ccdff71c2124e65306b55912d26))
* **cli:** correct provider setup guidance ([#438](https://github.com/djm204/frankenbeast/issues/438)) ([55703a9](https://github.com/djm204/frankenbeast/commit/55703a942effcfa800f3bc2374889c7cf8ad960f))
* **cli:** guide run users when no plan exists ([#778](https://github.com/djm204/frankenbeast/issues/778)) ([c0b334f](https://github.com/djm204/frankenbeast/commit/c0b334f8e48bad431feb4196a76364b0eecb4b3e))
* **cli:** honor non-interactive init ([#439](https://github.com/djm204/frankenbeast/issues/439)) ([2e8fc74](https://github.com/djm204/frankenbeast/commit/2e8fc749693d93ebc140f7c2089780b18ba055fe))
* **cli:** make beasts catalog exit cleanly ([#442](https://github.com/djm204/frankenbeast/issues/442)) ([5be5766](https://github.com/djm204/frankenbeast/commit/5be576690efbfd379085a307b138f4f0169f6d55))
* **cli:** pass provider override extra args ([6180dc9](https://github.com/djm204/frankenbeast/commit/6180dc972f66525b283e78e9e34af16a6356f39c))
* **cli:** persist network config sets ([#440](https://github.com/djm204/frankenbeast/issues/440)) ([a129823](https://github.com/djm204/frankenbeast/commit/a129823aa359f72418148b6a1c2dd23959a96bff))
* **cli:** persist security profile changes ([2e51d07](https://github.com/djm204/frankenbeast/commit/2e51d072d332c0ce4ef4b7e780341caff0a034ac)), closes [#403](https://github.com/djm204/frankenbeast/issues/403)
* **cli:** split runnable skill add from scaffold ([b1394aa](https://github.com/djm204/frankenbeast/commit/b1394aa4a4578535dd7b0876e32e58f8564af521)), closes [#404](https://github.com/djm204/frankenbeast/issues/404)
* **cli:** surface non-interactive HITL remedy ([02d65d9](https://github.com/djm204/frankenbeast/commit/02d65d993e533df5bb001f06a57abb9dad657805)), closes [#748](https://github.com/djm204/frankenbeast/issues/748)
* **cli:** surface PR auth failures ([deb8df7](https://github.com/djm204/frankenbeast/commit/deb8df7f7c94a87b106d6729404591a4e0fae871)), closes [#746](https://github.com/djm204/frankenbeast/issues/746)
* **cli:** validate numeric options ([61e3ffd](https://github.com/djm204/frankenbeast/commit/61e3ffd5ecda33263d6428a84913b95b5ba7c8cf))
* **config:** harden insecure defaults ([5abc7f9](https://github.com/djm204/frankenbeast/commit/5abc7f9c51477706ab6246116d44116645b363af)), closes [#522](https://github.com/djm204/frankenbeast/issues/522)
* **consolidation:** address review findings  lockfile, comms routes, docs ([e406cc2](https://github.com/djm204/frankenbeast/commit/e406cc2b32cd977f6212b05a300a96ae78480914))
* **critique:** make TokenBudgetBreaker actually enforce the budget ([#343](https://github.com/djm204/frankenbeast/issues/343)) ([b878f5f](https://github.com/djm204/frankenbeast/commit/b878f5f82700e3917e16da6c447cfa094b392595))
* dashboard review fixes, dispatch config stripping, error logging ([cdcf969](https://github.com/djm204/frankenbeast/commit/cdcf969541adfd69bca4a5ac9d4676571b639773))
* **deps:** resolve npm audit vulnerabilities ([6dbbf99](https://github.com/djm204/frankenbeast/commit/6dbbf99940b08a39397ff5ac588357b58cb87932)), closes [#517](https://github.com/djm204/frankenbeast/issues/517)
* honor run config provider and model precedence ([17d3432](https://github.com/djm204/frankenbeast/commit/17d3432f858d2590f2cb0683dbd2b661bd667fab))
* **lint:** suppress false-positive prefer-const on deferred assignments ([df7779d](https://github.com/djm204/frankenbeast/commit/df7779d9d469ea26361da38147ba23e40321351d))
* **mcp-suite:** mitigate hook hangs and uninstall residue ([#287](https://github.com/djm204/frankenbeast/issues/287)) ([b939d36](https://github.com/djm204/frankenbeast/commit/b939d36b68c8c3336af4df491819b32ec962d168))
* **network:** track in-process comms gateway ([#487](https://github.com/djm204/frankenbeast/issues/487)) ([b3d7a3b](https://github.com/djm204/frankenbeast/commit/b3d7a3be68dabbfcf3ff6e967ab73b4c0d29677f))
* **observer,types:** guard token counters against overflow & bad input ([#341](https://github.com/djm204/frankenbeast/issues/341)) ([0a7c6b4](https://github.com/djm204/frankenbeast/commit/0a7c6b4852e959489fbb389971b56f0c64278e5b))
* **orchestrator:** abort martin loop on budget exceedance ([#486](https://github.com/djm204/frankenbeast/issues/486)) ([2040af2](https://github.com/djm204/frankenbeast/commit/2040af26e3c6ba24416782f3604a4db19816932e))
* **orchestrator:** add missing @franken/critique and @franken/governor dependencies ([31e71f0](https://github.com/djm204/frankenbeast/commit/31e71f01d4aacd062ec42aebcf7bca3762a7de39))
* **orchestrator:** add missing fields to dep-bridge BridgeComponents ([1f08b40](https://github.com/djm204/frankenbeast/commit/1f08b40d1f1ff40cd682f7d0551301b2b67e3795))
* **orchestrator:** address CLI command review issues ([a9bc9a6](https://github.com/djm204/frankenbeast/commit/a9bc9a6834dee58b48be6b78a6a4dd0598120af5))
* **orchestrator:** address Phase 3 review gaps + document residuals ([bfc84ee](https://github.com/djm204/frankenbeast/commit/bfc84ee3f4afa95957100635381a1cbc33fe16f7))
* **orchestrator:** address Phase 4 review gaps ([8e48d85](https://github.com/djm204/frankenbeast/commit/8e48d85b9acbb01a008fd2ace05c8ef6603594c2))
* **orchestrator:** address Phase 4.5 review gaps ([1313c58](https://github.com/djm204/frankenbeast/commit/1313c582fba6e978c22472a937679782c3de13f3))
* **orchestrator:** address PR [#251](https://github.com/djm204/frankenbeast/issues/251) review comments ([0052f0a](https://github.com/djm204/frankenbeast/commit/0052f0abbced47dc37dd32467f92376a0e1ba263))
* **orchestrator:** address PR [#253](https://github.com/djm204/frankenbeast/issues/253) review comments ([8d467a4](https://github.com/djm204/frankenbeast/commit/8d467a40d22b33e4f698fe4fad9de1aa60ae776d))
* **orchestrator:** address PR [#255](https://github.com/djm204/frankenbeast/issues/255) review comments ([5fdecda](https://github.com/djm204/frankenbeast/commit/5fdecda1dd552d69062feadf5e67db6a23e0a41f))
* **orchestrator:** address PR [#256](https://github.com/djm204/frankenbeast/issues/256) review comments ([abd918c](https://github.com/djm204/frankenbeast/commit/abd918cfcb30234affb72ef17e07f062aea2974b))
* **orchestrator:** address PR [#260](https://github.com/djm204/frankenbeast/issues/260) review comments ([75d628e](https://github.com/djm204/frankenbeast/commit/75d628e5a7affc50615e48c0b41622f95d7af1b4))
* **orchestrator:** allow dashboard CORS origins ([59cf742](https://github.com/djm204/frankenbeast/commit/59cf7422d6e543c6b5e56589336303152611d071))
* **orchestrator:** allow deleting failed/completed agents, fix dashboard test ([e67166b](https://github.com/djm204/frankenbeast/commit/e67166b1119c490f39f9896f59f2035b178b66a7))
* **orchestrator:** bound config budget limits ([#308](https://github.com/djm204/frankenbeast/issues/308)) ([b4e2ad8](https://github.com/djm204/frankenbeast/commit/b4e2ad83c214f15cdba67673396c5ef2aba99bf3))
* **orchestrator:** bridge provider registries ([#447](https://github.com/djm204/frankenbeast/issues/447)) ([930175f](https://github.com/djm204/frankenbeast/commit/930175f63c617d8767b8598430ac75c649f9d547))
* **orchestrator:** close graph-builder critique bypass in local CLI path ([#462](https://github.com/djm204/frankenbeast/issues/462)) ([3174314](https://github.com/djm204/frankenbeast/commit/31743147cbd0a4e497f7285ab59fe3b458a5224a))
* **orchestrator:** distrust repo command override approvals ([#834](https://github.com/djm204/frankenbeast/issues/834)) ([72659ee](https://github.com/djm204/frankenbeast/commit/72659eeb68cc5791c1ef6dddc96fd652e050f318))
* **orchestrator:** fail closed when safety-critical modules are absent ([#394](https://github.com/djm204/frankenbeast/issues/394)) ([26eb340](https://github.com/djm204/frankenbeast/commit/26eb340c40fd62049bcdbe85a8194db26834462a))
* **orchestrator:** fence chunk file prompts ([#317](https://github.com/djm204/frankenbeast/issues/317)) ([c2ddec1](https://github.com/djm204/frankenbeast/commit/c2ddec1f3bf2ab6e3d4dcc4bae6117f7190cd243))
* **orchestrator:** finalize issue-mode sessions ([#481](https://github.com/djm204/frankenbeast/issues/481)) ([6a53d9d](https://github.com/djm204/frankenbeast/commit/6a53d9d17697c0f78da6622f95ea3e506330edb3))
* **orchestrator:** gate provider command overrides ([#664](https://github.com/djm204/frankenbeast/issues/664)) ([b785bb9](https://github.com/djm204/frankenbeast/commit/b785bb92c3a462f27886b1e7190a30cf2e97092d)), closes [#590](https://github.com/djm204/frankenbeast/issues/590)
* **orchestrator:** guard readline creation behind TTY check in governor wiring ([7785c72](https://github.com/djm204/frankenbeast/commit/7785c72d21afa5d331ba02ab5ace298c40b580ed))
* **orchestrator:** handle missing provider CLIs ([#762](https://github.com/djm204/frankenbeast/issues/762)) ([6a9235d](https://github.com/djm204/frankenbeast/commit/6a9235dfca6538a27023c836473c9e0ea639a8c0))
* **orchestrator:** harden CLI adapter timeout handling ([#320](https://github.com/djm204/frankenbeast/issues/320)) ([df4a4e1](https://github.com/djm204/frankenbeast/commit/df4a4e110721d43726ea8bad3502c372718c65d0))
* **orchestrator:** harden verify command execution ([6a4c95e](https://github.com/djm204/frankenbeast/commit/6a4c95ef1f5d6e298bc4fde5ce8f5fad1cd81913)), closes [#521](https://github.com/djm204/frankenbeast/issues/521)
* **orchestrator:** improve CLI no-op UX ([#318](https://github.com/djm204/frankenbeast/issues/318)) ([b45818f](https://github.com/djm204/frankenbeast/commit/b45818fb150861add8b632d0de23ca6c6e9c82b2))
* **orchestrator:** log HTTP errors to terminal, allow deleting failed agents ([31fb762](https://github.com/djm204/frankenbeast/commit/31fb76286b4236e5fa822b8b41f6c51f3cb9fcec))
* **orchestrator:** make beast run updates atomic ([#838](https://github.com/djm204/frankenbeast/issues/838)) ([fe6fede](https://github.com/djm204/frankenbeast/commit/fe6fede5d024e5580f82d90107b1b6e376d3be52))
* **orchestrator:** make chunk session writes atomic and quarantine corrupt sessions ([#451](https://github.com/djm204/frankenbeast/issues/451)) ([6ab8f53](https://github.com/djm204/frankenbeast/commit/6ab8f530651d5c1c8dd3648920c1cdab1174c9d7))
* **orchestrator:** make FileCheckpointStore atomic and crash-safe ([#321](https://github.com/djm204/frankenbeast/issues/321)) ([fee14e3](https://github.com/djm204/frankenbeast/commit/fee14e3109df4ab9aae23169c2d16364167ff551))
* **orchestrator:** mark container workspaces git-safe ([#476](https://github.com/djm204/frankenbeast/issues/476)) ([c6fb6a8](https://github.com/djm204/frankenbeast/commit/c6fb6a892748b077443a1f1c924324d19124f348))
* **orchestrator:** mock session/GC classes in dep-factory tests to prevent CI timeouts ([582dd03](https://github.com/djm204/frankenbeast/commit/582dd032bc37aae92d58559e5919b8b587f9d50a))
* **orchestrator:** normalize non-object config root, persist on remove ([7956228](https://github.com/djm204/frankenbeast/commit/7956228ea4cda037633751af88d072cbd3d82d4f))
* **orchestrator:** operator-auth all control-plane routes + comms endpoints ([#396](https://github.com/djm204/frankenbeast/issues/396)) ([398c752](https://github.com/djm204/frankenbeast/commit/398c7524cd467d18ac03a75c046124104e8342ff))
* **orchestrator:** persist BeastLogger file writes ([#315](https://github.com/djm204/frankenbeast/issues/315)) ([0bba450](https://github.com/djm204/frankenbeast/commit/0bba450dd52ee8331d73cfb342638119c4c4ab29))
* **orchestrator:** populate phase in ChatRuntime.result(), update docs ([#277](https://github.com/djm204/frankenbeast/issues/277)) ([ec02071](https://github.com/djm204/frankenbeast/commit/ec02071c8987d8b1794784c09a9c2f8e98bb8f33))
* **orchestrator:** preserve cli:* skill compatibility in consolidated deps ([b0231c5](https://github.com/djm204/frankenbeast/commit/b0231c5250ebb6bb5b97726929835ea64970d11e))
* **orchestrator:** preserve MCP tool HITL metadata ([#552](https://github.com/djm204/frankenbeast/issues/552)) ([2008c70](https://github.com/djm204/frankenbeast/commit/2008c707c9297958c498ba3cc30cb898c1a46018))
* **orchestrator:** propagate adapter LLM failures instead of empty string ([#323](https://github.com/djm204/frankenbeast/issues/323)) ([ab9d64b](https://github.com/djm204/frankenbeast/commit/ab9d64b1453f3220511164226fff0b29b34f361a))
* **orchestrator:** propagate reflection flag into orchestrator config ([4db763c](https://github.com/djm204/frankenbeast/commit/4db763ce818d2be4354bcb75e3848b806f99cae5))
* **orchestrator:** prove and harden MartinLoop abort-listener cleanup ([#324](https://github.com/djm204/frankenbeast/issues/324)) ([5d0465d](https://github.com/djm204/frankenbeast/commit/5d0465d2bd82e7f921c365c9dffe5e024f34c4ba))
* **orchestrator:** redact configured Beast log secrets ([f81b2e7](https://github.com/djm204/frankenbeast/commit/f81b2e79d379de5ce4b5f0abcd0046ead72aa7a0))
* **orchestrator:** rehydrate checkpointed dependency outputs ([#483](https://github.com/djm204/frankenbeast/issues/483)) ([f23dbfe](https://github.com/djm204/frankenbeast/commit/f23dbfe9fb316338b49ae41cf82cc89e911bcf03))
* **orchestrator:** reject stale Discord interaction signatures ([#386](https://github.com/djm204/frankenbeast/issues/386)) ([3890e8d](https://github.com/djm204/frankenbeast/commit/3890e8d90c5db9f93449d7760aa8bda27a5f08db)), closes [#352](https://github.com/djm204/frankenbeast/issues/352)
* **orchestrator:** resolve Chunk A residuals R1-R4 ([7572d68](https://github.com/djm204/frankenbeast/commit/7572d68b62c520e4745f9d218f4c5806af71df79))
* **orchestrator:** resolve Chunk A residuals R1-R4 ([778acba](https://github.com/djm204/frankenbeast/commit/778acbae53803c1e2807c99c973392ee2e666429))
* **orchestrator:** resolve review action item hardening ([#336](https://github.com/djm204/frankenbeast/issues/336)) ([763178a](https://github.com/djm204/frankenbeast/commit/763178a1d1ce311cb6181184ef9f3ebbf60bb8e3))
* **orchestrator:** reuse beast control services ([#807](https://github.com/djm204/frankenbeast/issues/807)) ([590e82c](https://github.com/djm204/frankenbeast/commit/590e82c4dabc17098f943b808e88796bc3a5b683))
* **orchestrator:** strip unknown keys from dispatch config before validation ([1d20a54](https://github.com/djm204/frankenbeast/commit/1d20a548d6dec11bf1e0bc0a6a4f4c7255286798))
* **orchestrator:** swallow ENOENT in BeastLogStore.append ([02d303b](https://github.com/djm204/frankenbeast/commit/02d303be59caa5ac2c17be44f3315c42f0903d8a))
* **orchestrator:** use argv subprocess calls for PR/git commands ([#388](https://github.com/djm204/frankenbeast/issues/388)) ([2a9098e](https://github.com/djm204/frankenbeast/commit/2a9098eda6beeb8ccdc612b2bcaca7e9fdc0fb76))
* **orchestrator:** validate refreshed execution plans ([#540](https://github.com/djm204/frankenbeast/issues/540)) ([a2c5a22](https://github.com/djm204/frankenbeast/commit/a2c5a222b4995ea333451cf712c28a6f8870c23f))
* **orchestrator:** validate Slack interactive payloads ([766b75e](https://github.com/djm204/frankenbeast/commit/766b75ec623619a4b9f6e8dd9da09a35b955a7ca))
* **orchestrator:** validate telegram webhook secret token ([#805](https://github.com/djm204/frankenbeast/issues/805)) ([b6c9cb5](https://github.com/djm204/frankenbeast/commit/b6c9cb5efbc6059e63eaf8356a573d8db8df341a))
* **packaging:** pin internal package deps ([#763](https://github.com/djm204/frankenbeast/issues/763)) ([3603eac](https://github.com/djm204/frankenbeast/commit/3603eac5e23e2e95ee9c622c162fdd72b8ab33bb))
* replace console log statements ([#797](https://github.com/djm204/frankenbeast/issues/797)) ([ef5225f](https://github.com/djm204/frankenbeast/commit/ef5225f7e61196945d481ed40181f86aaea0f40d))
* residual one-shots (comms cleanup, HITL test, checkpoint flush, PROGRESS.md) ([e105db3](https://github.com/djm204/frankenbeast/commit/e105db3fe067c6473d3f2a4bc43fc85756487018))
* **runtime:** proxy chat-server when beast daemon is live ([#767](https://github.com/djm204/frankenbeast/issues/767)) ([7a1669a](https://github.com/djm204/frankenbeast/commit/7a1669a9f909356355bf7fb0df4ace468458bb98))
* **runtime:** scope beast run configs to project root ([#525](https://github.com/djm204/frankenbeast/issues/525)) ([626b8de](https://github.com/djm204/frankenbeast/commit/626b8de0f3f3754b3ecfaa863924216fa063498b))
* **security:** Chunk 1  fail-closed HTTP & approval boundaries ([#296](https://github.com/djm204/frankenbeast/issues/296)) ([f281e8e](https://github.com/djm204/frankenbeast/commit/f281e8eb98c6208a7da2f06e2923c57bd9890090))
* **security:** constrain chunk-plan design doc path ([#719](https://github.com/djm204/frankenbeast/issues/719)) ([45b25d9](https://github.com/djm204/frankenbeast/commit/45b25d9cc6ecb6403726b9e4c80eefab2a9f1a2e))
* **security:** decouple webhook signature policy ([#712](https://github.com/djm204/frankenbeast/issues/712)) ([5d6f127](https://github.com/djm204/frankenbeast/commit/5d6f1277b110fda6a2f708427844a026b45c2d4e))
* **security:** fail closed for unsigned exposed webhooks ([ed740eb](https://github.com/djm204/frankenbeast/commit/ed740eb4f87ce3b04210721c777b21b950ab5212)), closes [#611](https://github.com/djm204/frankenbeast/issues/611)
* **security:** gate MCP health checks on trust ([a7968ee](https://github.com/djm204/frankenbeast/commit/a7968eee878d30f8428928bedbfc1d86bebb8560))
* **security:** handle malformed Slack interactive payloads ([#830](https://github.com/djm204/frankenbeast/issues/830)) ([8411c51](https://github.com/djm204/frankenbeast/commit/8411c51b580538c22822b94d74de4365729dd4ca))
* **security:** harden Hono CORS handling ([00a0d2b](https://github.com/djm204/frankenbeast/commit/00a0d2bbcb66121d343b3b3143c4253765a84ffe)), closes [#583](https://github.com/djm204/frankenbeast/issues/583)
* **security:** mask common secrets in PII middleware ([#306](https://github.com/djm204/frankenbeast/issues/306)) ([97e1374](https://github.com/djm204/frankenbeast/commit/97e13748dcd3afa00037a7195aee755ba8d1ef60))
* **security:** move chat socket tokens out of URLs ([#721](https://github.com/djm204/frankenbeast/issues/721)) ([71fd2f7](https://github.com/djm204/frankenbeast/commit/71fd2f76b7655f9ecbed802452b554b7f5835b02))
* **security:** redact Beast failure stderr tails ([#714](https://github.com/djm204/frankenbeast/issues/714)) ([99f4e73](https://github.com/djm204/frankenbeast/commit/99f4e73437b6f8222eb6f8d59ea359c3f2c8a969))
* **security:** redact Beast startup log lines ([#716](https://github.com/djm204/frankenbeast/issues/716)) ([d7cf39c](https://github.com/djm204/frankenbeast/commit/d7cf39cd0c7ea2101c458fa81dde69bc347267bf)), closes [#600](https://github.com/djm204/frankenbeast/issues/600)
* **security:** redact Telegram bot token URLs ([fdda455](https://github.com/djm204/frankenbeast/commit/fdda455f88d4f720f8221030857b1594f39482f1))
* **security:** reject non-loopback plaintext endpoints ([#733](https://github.com/djm204/frankenbeast/issues/733)) ([78741d1](https://github.com/djm204/frankenbeast/commit/78741d1c3c779e4baced6acd75190f36cb445435))
* **security:** sandbox Beast execution ([#298](https://github.com/djm204/frankenbeast/issues/298)) ([9a7b4f0](https://github.com/djm204/frankenbeast/commit/9a7b4f08a11bc3856d7090c4d2371e7048313cfd))
* **security:** ticket dashboard SSE streams ([#740](https://github.com/djm204/frankenbeast/issues/740)) ([6950ed8](https://github.com/djm204/frankenbeast/commit/6950ed84dfef95f4e3de474dd8928e896727b28e)), closes [#622](https://github.com/djm204/frankenbeast/issues/622)
* serve dashboard from production build ([#775](https://github.com/djm204/frankenbeast/issues/775)) ([7a4f8ab](https://github.com/djm204/frankenbeast/commit/7a4f8ab272c5c3dc5d06749d90f86284c63629d6))
* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))
* **test:** validate orchestrator Vitest environment flags ([102e0e4](https://github.com/djm204/frankenbeast/commit/102e0e4145cb7ba784be2344fbf6371441156667)), closes [#555](https://github.com/djm204/frankenbeast/issues/555)
* **test:** validate Vitest environment flags ([1479dce](https://github.com/djm204/frankenbeast/commit/1479dcefc5bedfd065667fba75e2bd48b7a1ba5e)), closes [#557](https://github.com/djm204/frankenbeast/issues/557)
* **types:** add recovery fields to FrankenContext ([#312](https://github.com/djm204/frankenbeast/issues/312)) ([34c251a](https://github.com/djm204/frankenbeast/commit/34c251a62ea1eb054d08105beb1cbf659617698e))
* **types:** move orchestration contracts to canonical package ([#819](https://github.com/djm204/frankenbeast/issues/819)) ([e2e860e](https://github.com/djm204/frankenbeast/commit/e2e860e5576de1cc091dc3f3b59c9c06cd060fb9)), closes [#374](https://github.com/djm204/frankenbeast/issues/374)
* **web:** fail closed for dashboard SSE auth ([#739](https://github.com/djm204/frankenbeast/issues/739)) ([04e3b19](https://github.com/djm204/frankenbeast/commit/04e3b19de77c56be9d7ef5a7f383efd33694cc11))
* **web:** fall back to REST for approvals ([#479](https://github.com/djm204/frankenbeast/issues/479)) ([3ac7f74](https://github.com/djm204/frankenbeast/commit/3ac7f74384328418a483fc9a2e4fb8837d87a380))
* **web:** improve approval pending UX ([397aad6](https://github.com/djm204/frankenbeast/commit/397aad66ed038e7329447866e54c327c73952e3b)), closes [#654](https://github.com/djm204/frankenbeast/issues/654)
* **web:** keep chat bearer auth server-side ([#667](https://github.com/djm204/frankenbeast/issues/667)) ([6356ecf](https://github.com/djm204/frankenbeast/commit/6356ecf582e3238ea478b9daa698cdad9e7f6342))
* **web:** keep control-plane operator token server-side ([#666](https://github.com/djm204/frankenbeast/issues/666)) ([d201851](https://github.com/djm204/frankenbeast/commit/d201851f14b35d1388acf4ecf67b872d719559fb))
* **web:** persist agent detail edits ([#533](https://github.com/djm204/frankenbeast/issues/533)) ([de88101](https://github.com/djm204/frankenbeast/commit/de88101a2fcf9514c9785dee931177d098dd95ef))
* **web:** remove operator token from frontend bundle ([fc1b8f5](https://github.com/djm204/frankenbeast/commit/fc1b8f5f7874488440b5755d4f71e8d6dd0774f1)), closes [#566](https://github.com/djm204/frankenbeast/issues/566)
* **web:** stream dashboard sse updates ([#539](https://github.com/djm204/frankenbeast/issues/539)) ([b7d429e](https://github.com/djm204/frankenbeast/commit/b7d429eacdb7f54f83a9cd24ca137415e679306c))
* **web:** wire beast prompt file picker selection ([#815](https://github.com/djm204/frankenbeast/issues/815)) ([b283987](https://github.com/djm204/frankenbeast/commit/b283987264c3c5716c813c78c23c5fa8f65a9bad))
* **web:** wire dashboard Kill action to a real agent/run endpoint ([#450](https://github.com/djm204/frankenbeast/issues/450)) ([562ffad](https://github.com/djm204/frankenbeast/commit/562ffad0661821d7be53ce3d93dbb673b40262a5))
* **web:** wire Network page log fetching ([#532](https://github.com/djm204/frankenbeast/issues/532)) ([49051bd](https://github.com/djm204/frankenbeast/commit/49051bde6a4531c2d5d6439f596f1736e4d98b90))


### Refactoring

* **orchestrator:** clean up governor type assertions and document non-TTY path ([16cab0f](https://github.com/djm204/frankenbeast/commit/16cab0f0ff7281b67d25094f3c819839861d4f8a))
* **orchestrator:** delete standalone comms server files ([35cf137](https://github.com/djm204/frankenbeast/commit/35cf13706eb75e0ae07505fc57a766226206b3f6))
* **orchestrator:** migrate dep-factory to consolidated components ([e432b6d](https://github.com/djm204/frankenbeast/commit/e432b6dd845a059e292df70aba3f18c47f9cafe8))
* **orchestrator:** share analytics sqlite handle ([d9a6b69](https://github.com/djm204/frankenbeast/commit/d9a6b6904be9b193d67d1c4ee2c843a54c001bae)), closes [#681](https://github.com/djm204/frankenbeast/issues/681)
* **orchestrator:** unify CLI availability checks ([#792](https://github.com/djm204/frankenbeast/issues/792)) ([b1ea513](https://github.com/djm204/frankenbeast/commit/b1ea513275fc6cd5d5efd376d4ccc0ffe3131a86))
* **orchestrator:** wire createBeastDeps into dep-factory replacing stubs ([50184a3](https://github.com/djm204/frankenbeast/commit/50184a309f416b49243bf4ca5ae1b133771ca5ad))


### Miscellaneous

* **node:** align workspace engine constraints ([dcf5c4e](https://github.com/djm204/frankenbeast/commit/dcf5c4e90ca594f4ff282ea37c0a0d14000a39af)), closes [#757](https://github.com/djm204/frankenbeast/issues/757)
* release main ([41acdbe](https://github.com/djm204/frankenbeast/commit/41acdbe09c990c38ade8209b3283b4405399dcda))
* release main ([19664bb](https://github.com/djm204/frankenbeast/commit/19664bb4baf0e8e0acb4c7042bcfee7f0799526b))
* release main ([29f20c7](https://github.com/djm204/frankenbeast/commit/29f20c74d7e5b0d5633188d1c6aa14eb189d0cc8))
* release main ([f388c96](https://github.com/djm204/frankenbeast/commit/f388c9636e6b34f63dde32314cfada9935a52370))
* release main ([78fce35](https://github.com/djm204/frankenbeast/commit/78fce35668a8ef71ada15816587858e4f5499470))
* release main ([24ca434](https://github.com/djm204/frankenbeast/commit/24ca434931d802006ec3d7744f2c8d4de9723eb7))
* release main ([ebdbb58](https://github.com/djm204/frankenbeast/commit/ebdbb58c04e68ab5e14414dea2e5f200141c152e))
* release main ([490d5c4](https://github.com/djm204/frankenbeast/commit/490d5c42a79aeb79afb6fc1f00a39eaed09f6a34))
* release main ([50717e2](https://github.com/djm204/frankenbeast/commit/50717e2e2f6bd7c1dcc209e60d1b2cafed6af550))
* release main ([78d8495](https://github.com/djm204/frankenbeast/commit/78d849528ab990a50b2ed6859d98d10cab92b09f))
* release main ([48548f3](https://github.com/djm204/frankenbeast/commit/48548f32209176d6d9a1562fdb4725742ecb9515))
* release main ([1e760f3](https://github.com/djm204/frankenbeast/commit/1e760f3dde475636378bdba15afe4cbc13381239))
* release main ([4ee81c5](https://github.com/djm204/frankenbeast/commit/4ee81c571b79f98e41e6b9531336b7781592e680))
* release main ([4e4ab4c](https://github.com/djm204/frankenbeast/commit/4e4ab4c4c7cde525fef815c057bae24f2c6b34c5))
* release main ([cb2643c](https://github.com/djm204/frankenbeast/commit/cb2643c48eb86850bd76e1e0cd3af0b2e8301990))
* release main ([ed75081](https://github.com/djm204/frankenbeast/commit/ed750811df44ebc431b3aeca32b2606b503b25f3))
* release main ([ffee28a](https://github.com/djm204/frankenbeast/commit/ffee28a05bf220a38b0aa10070f6116db0e3c042))
* release main ([ade7f4a](https://github.com/djm204/frankenbeast/commit/ade7f4a923f9ab55a36744d646e70c6da3d8310c))
* release main ([2d3cf22](https://github.com/djm204/frankenbeast/commit/2d3cf2261539e1012e7a82bced3848d5688283cf))
* release main ([a6d94d3](https://github.com/djm204/frankenbeast/commit/a6d94d3456a0f8d011f3ca629f0ca92e520c117e))
* release main ([696580f](https://github.com/djm204/frankenbeast/commit/696580f097d1f7e982aa35e288eb06d89e86b13f))
* release main ([5e1ba59](https://github.com/djm204/frankenbeast/commit/5e1ba59e0ca6ff7296839508d551d97865adb8d1))
* release main ([#273](https://github.com/djm204/frankenbeast/issues/273)) ([fbdd6a4](https://github.com/djm204/frankenbeast/commit/fbdd6a4429eaf727acc178c5952b629845defc7d))
* release main ([#283](https://github.com/djm204/frankenbeast/issues/283)) ([0d1cc48](https://github.com/djm204/frankenbeast/commit/0d1cc48f4f1a4f75a3fc447cabd274d5eb184f39))
* release main ([#285](https://github.com/djm204/frankenbeast/issues/285)) ([5544c28](https://github.com/djm204/frankenbeast/commit/5544c28d035c0d770e96890e54675a5260892e58))
* release main ([#288](https://github.com/djm204/frankenbeast/issues/288)) ([2022fbe](https://github.com/djm204/frankenbeast/commit/2022fbe37fbe7a1f81beda8f09979c988441dfae))
* release main ([#290](https://github.com/djm204/frankenbeast/issues/290)) ([610a0ea](https://github.com/djm204/frankenbeast/commit/610a0eaae42fa9461e2b7665e0ad2eca6d3ed33a))
* release main ([#293](https://github.com/djm204/frankenbeast/issues/293)) ([f3be88e](https://github.com/djm204/frankenbeast/commit/f3be88ed17e5b296a3ec5bb1beed1d0399d9d4c0))
* release main ([#295](https://github.com/djm204/frankenbeast/issues/295)) ([693ee5e](https://github.com/djm204/frankenbeast/commit/693ee5e698c9f64478a2617d1be8676fcbf392f3))
* release main ([#303](https://github.com/djm204/frankenbeast/issues/303)) ([96f734e](https://github.com/djm204/frankenbeast/commit/96f734efc83b9d13c9df1a7f33ab73e33365b668))
* release main ([#307](https://github.com/djm204/frankenbeast/issues/307)) ([ff8284e](https://github.com/djm204/frankenbeast/commit/ff8284e5c840873912c9c14a475451c30cd0143e))
* release main ([#309](https://github.com/djm204/frankenbeast/issues/309)) ([9dadfae](https://github.com/djm204/frankenbeast/commit/9dadfae67be6686e3a7962c5fd9e21ed8b6b525b))
* release main ([#337](https://github.com/djm204/frankenbeast/issues/337)) ([1f819ef](https://github.com/djm204/frankenbeast/commit/1f819ef9f239137df6977bfbe57442d256a1d2a6))
* release main ([#378](https://github.com/djm204/frankenbeast/issues/378)) ([33629c1](https://github.com/djm204/frankenbeast/commit/33629c1b937e63a97fb06fdb32417ac19323b85d))
* release main ([#389](https://github.com/djm204/frankenbeast/issues/389)) ([24e5428](https://github.com/djm204/frankenbeast/commit/24e5428cc009a1ed497e25a94c0a0911b45eb8e0))
* release main ([#448](https://github.com/djm204/frankenbeast/issues/448)) ([8c9934f](https://github.com/djm204/frankenbeast/commit/8c9934f4adbd05b1ebae48081a3b3406746a1bc3))
* release main ([#474](https://github.com/djm204/frankenbeast/issues/474)) ([f49ac72](https://github.com/djm204/frankenbeast/commit/f49ac727e80491fcd479bacc06bc51d914975cf9))
* release main ([#482](https://github.com/djm204/frankenbeast/issues/482)) ([66f5641](https://github.com/djm204/frankenbeast/commit/66f56417de1252b572fba1f11db008c0a21a34df))
* release main ([#524](https://github.com/djm204/frankenbeast/issues/524)) ([0481cad](https://github.com/djm204/frankenbeast/commit/0481cadf1a5cc49b32e01ca6337bc84c6488bb92))
* release main ([#537](https://github.com/djm204/frankenbeast/issues/537)) ([41d70dd](https://github.com/djm204/frankenbeast/commit/41d70dde60bbbc0983702fc2ebfb63ee0528aa53))
* release main ([#545](https://github.com/djm204/frankenbeast/issues/545)) ([fb5a692](https://github.com/djm204/frankenbeast/commit/fb5a6920da9e053deba737d88f3c515f7d4ad798))
* release main ([#547](https://github.com/djm204/frankenbeast/issues/547)) ([9105085](https://github.com/djm204/frankenbeast/commit/9105085c4c751416999094dbb5a017712356c6d9))
* release main ([#554](https://github.com/djm204/frankenbeast/issues/554)) ([660250e](https://github.com/djm204/frankenbeast/commit/660250e5a21616955b05386eea741f17363c9198))
* release main ([#723](https://github.com/djm204/frankenbeast/issues/723)) ([767f8e2](https://github.com/djm204/frankenbeast/commit/767f8e2d347d1c4757db921e8689170f7fa9a9f1))


### Documentation

* **franken-orchestrator:** document intelligent llm caching ([12a0ea0](https://github.com/djm204/frankenbeast/commit/12a0ea0009d1daa504ed8e12876fe0220cfcd712))
* update RAMP_UP files across all packages to reflect current integration status ([a6f9f62](https://github.com/djm204/frankenbeast/commit/a6f9f627373e426278eaa98471d3f78da8064d26))
* update RAMP_UP for all packages with accurate integration status ([78220d6](https://github.com/djm204/frankenbeast/commit/78220d6ffb22720eae325f2f3f94823e6a29a463))


### Tests

* delete 26 fluff test files (~283 tests) identified by audit ([03358d4](https://github.com/djm204/frankenbeast/commit/03358d4cdc745197e48b61855ed77571a37a2939))
* **franken-orchestrator:** speed up dep-factory harnesses ([9f0e859](https://github.com/djm204/frankenbeast/commit/9f0e859c82f4b39f281500b802dedd58e900efef))
* **governor:** cover factory and sandbox user policy ([#817](https://github.com/djm204/frankenbeast/issues/817)) ([48325c4](https://github.com/djm204/frankenbeast/commit/48325c4d1d86706295ef4a365b3d16b80e4a4817)), closes [#645](https://github.com/djm204/frankenbeast/issues/645)
* **orchestrator:** add comms round-trip integration test (Phase 4.5.05) ([b493ed3](https://github.com/djm204/frankenbeast/commit/b493ed3e3aafdab2f0e8f894c8e72c85815c9eb2))
* **orchestrator:** add HITL approval integration test via comms gateway ([0e31a39](https://github.com/djm204/frankenbeast/commit/0e31a3924134d240d7478a943b84db547a479d35))
* **orchestrator:** add provider failover integration tests (Phase 3.9) ([57d2e8f](https://github.com/djm204/frankenbeast/commit/57d2e8f9a883fd07920d4a07485189c324147352))
* **orchestrator:** cover live comms route mounting ([#765](https://github.com/djm204/frankenbeast/issues/765)) ([0779e89](https://github.com/djm204/frankenbeast/commit/0779e897f56a1cd4c0ae90fd161115513b856e30))
* **orchestrator:** guard chat attach console output ([#799](https://github.com/djm204/frankenbeast/issues/799)) ([f67c39a](https://github.com/djm204/frankenbeast/commit/f67c39a558a64f54b2bfeb794f6f9aed1d47d57e)), closes [#558](https://github.com/djm204/frankenbeast/issues/558)
* replace secret-looking fixture literals ([#787](https://github.com/djm204/frankenbeast/issues/787)) ([e9b5d8a](https://github.com/djm204/frankenbeast/commit/e9b5d8af10d7144290ce0e513658c3b41b8f9597))
* **security:** avoid password literals in fixtures ([#788](https://github.com/djm204/frankenbeast/issues/788)) ([f411648](https://github.com/djm204/frankenbeast/commit/f41164879b1b35152d7bdc02b5e83dd586dd2344))
* **security:** cover exposed unsigned webhook startup guard ([#724](https://github.com/djm204/frankenbeast/issues/724)) ([5f2b2c1](https://github.com/djm204/frankenbeast/commit/5f2b2c1096140a1b125f017f3b73314308d0a503))
* stabilize beast process failure fixtures ([88f4ed7](https://github.com/djm204/frankenbeast/commit/88f4ed7c15d13a1c316e7124e89f17d968b031e2))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/critique bumped from 0.6.10 to 0.6.11
    * @franken/governor bumped from 0.5.8 to 0.5.9
    * @franken/types bumped from 0.7.5 to 0.7.6
    * @franken/observer bumped from 0.7.10 to 0.7.11
    * @franken/planner bumped from 0.4.8 to 0.4.9
    * @franken/brain bumped from 0.6.6 to 0.7.0
</details>

<details><summary>@franken/planner: 0.4.9</summary>

## [0.4.9](https://github.com/djm204/frankenbeast/compare/@franken/planner-v0.4.8...@franken/planner-v0.4.9) (2026-07-06)


### Bug Fixes

* **deps:** resolve npm audit vulnerabilities ([6dbbf99](https://github.com/djm204/frankenbeast/commit/6dbbf99940b08a39397ff5ac588357b58cb87932)), closes [#517](https://github.com/djm204/frankenbeast/issues/517)
* **franken-planner:** error on cyclic sub-graph instead of dropping tasks ([#384](https://github.com/djm204/frankenbeast/issues/384)) ([06f7b19](https://github.com/djm204/frankenbeast/commit/06f7b19125900b832da8ab44fb1ce2470191ac7d)), closes [#54](https://github.com/djm204/frankenbeast/issues/54)
* **packaging:** pin internal package deps ([#763](https://github.com/djm204/frankenbeast/issues/763)) ([3603eac](https://github.com/djm204/frankenbeast/commit/3603eac5e23e2e95ee9c622c162fdd72b8ab33bb))
* **planner:** escape markdown in plan exports ([#311](https://github.com/djm204/frankenbeast/issues/311)) ([98d63b5](https://github.com/djm204/frankenbeast/commit/98d63b5bb78fc05c224090cc24fe1aecb0145ff7))
* **planner:** guard insertFixItTask against duplicate task IDs ([#379](https://github.com/djm204/frankenbeast/issues/379)) ([5d222cc](https://github.com/djm204/frankenbeast/commit/5d222cc5d68a5ed70edf65c8aa1d3a5e8481944b)), closes [#358](https://github.com/djm204/frankenbeast/issues/358)
* **planner:** keep stub HITL gate test-only ([0b898b1](https://github.com/djm204/frankenbeast/commit/0b898b1a9dff2e761941c3945dac3099984147af)), closes [#412](https://github.com/djm204/frankenbeast/issues/412)
* **planner:** preserve governance rejection in parallel strategy ([#480](https://github.com/djm204/frankenbeast/issues/480)) ([f98a453](https://github.com/djm204/frankenbeast/commit/f98a4535f8fcaa3ad5ed06bc7a4c2a4eb086329b))
* **planner:** reject trivial error patterns ([#314](https://github.com/djm204/frankenbeast/issues/314)) ([1a67f64](https://github.com/djm204/frankenbeast/commit/1a67f648ea115aa18af06cc44593a5826ee09292))
* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))


### Refactoring

* **planner:** extract fix-it injection logic ([fb2579c](https://github.com/djm204/frankenbeast/commit/fb2579c4f1980a1fb6572d16b89c8a1424ba5e63)), closes [#642](https://github.com/djm204/frankenbeast/issues/642)


### Miscellaneous

* **node:** align workspace engine constraints ([dcf5c4e](https://github.com/djm204/frankenbeast/commit/dcf5c4e90ca594f4ff282ea37c0a0d14000a39af)), closes [#757](https://github.com/djm204/frankenbeast/issues/757)
* **packages:** align publishable package licenses ([#783](https://github.com/djm204/frankenbeast/issues/783)) ([398d37c](https://github.com/djm204/frankenbeast/commit/398d37c552954a94d08d90fce9ff76573b9ec664))
* release main ([d428ecd](https://github.com/djm204/frankenbeast/commit/d428ecd6e627d5c3c48cd0ef98c45a8eeca56d3e))
* release main ([55f726e](https://github.com/djm204/frankenbeast/commit/55f726e1af6e84f3401fd5ad14f452e7ac727f22))
* release main ([#309](https://github.com/djm204/frankenbeast/issues/309)) ([9dadfae](https://github.com/djm204/frankenbeast/commit/9dadfae67be6686e3a7962c5fd9e21ed8b6b525b))
* release main ([#389](https://github.com/djm204/frankenbeast/issues/389)) ([24e5428](https://github.com/djm204/frankenbeast/commit/24e5428cc009a1ed497e25a94c0a0911b45eb8e0))
* release main ([#448](https://github.com/djm204/frankenbeast/issues/448)) ([8c9934f](https://github.com/djm204/frankenbeast/commit/8c9934f4adbd05b1ebae48081a3b3406746a1bc3))
* release main ([#482](https://github.com/djm204/frankenbeast/issues/482)) ([66f5641](https://github.com/djm204/frankenbeast/commit/66f56417de1252b572fba1f11db008c0a21a34df))
* release main ([#537](https://github.com/djm204/frankenbeast/issues/537)) ([41d70dd](https://github.com/djm204/frankenbeast/commit/41d70dde60bbbc0983702fc2ebfb63ee0528aa53))
* release main ([#554](https://github.com/djm204/frankenbeast/issues/554)) ([660250e](https://github.com/djm204/frankenbeast/commit/660250e5a21616955b05386eea741f17363c9198))
* release main ([#723](https://github.com/djm204/frankenbeast/issues/723)) ([767f8e2](https://github.com/djm204/frankenbeast/commit/767f8e2d347d1c4757db921e8689170f7fa9a9f1))


### Documentation

* refresh accuracy against implementation ([#393](https://github.com/djm204/frankenbeast/issues/393)) ([e5a6088](https://github.com/djm204/frankenbeast/commit/e5a6088cddec35b5ac9c55b60323ff0c55663486))
* update RAMP_UP files across all packages to reflect current integration status ([a6f9f62](https://github.com/djm204/frankenbeast/commit/a6f9f627373e426278eaa98471d3f78da8064d26))
* update RAMP_UP for all packages with accurate integration status ([78220d6](https://github.com/djm204/frankenbeast/commit/78220d6ffb22720eae325f2f3f94823e6a29a463))


### Tests

* delete 26 fluff test files (~283 tests) identified by audit ([03358d4](https://github.com/djm204/frankenbeast/commit/03358d4cdc745197e48b61855ed77571a37a2939))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/types bumped from 0.7.5 to 0.7.6
</details>

<details><summary>franken-types: 0.7.6</summary>

## [0.7.6](https://github.com/djm204/frankenbeast/compare/franken-types-v0.7.5...franken-types-v0.7.6) (2026-07-06)


### Bug Fixes

* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))
* **types:** move orchestration contracts to canonical package ([#819](https://github.com/djm204/frankenbeast/issues/819)) ([e2e860e](https://github.com/djm204/frankenbeast/commit/e2e860e5576de1cc091dc3f3b59c9c06cd060fb9)), closes [#374](https://github.com/djm204/frankenbeast/issues/374)
</details>

<details><summary>franken-web: 0.2.1</summary>

## [0.2.1](https://github.com/djm204/frankenbeast/compare/franken-web-v0.2.0...franken-web-v0.2.1) (2026-07-06)


### Bug Fixes

* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))
* **web:** wire beast prompt file picker selection ([#815](https://github.com/djm204/frankenbeast/issues/815)) ([b283987](https://github.com/djm204/frankenbeast/commit/b283987264c3c5716c813c78c23c5fa8f65a9bad))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @franken/types bumped from 0.7.5 to 0.7.6
</details>

<details><summary>0.42.0</summary>

## [0.42.0](https://github.com/djm204/frankenbeast/compare/v0.41.1...v0.42.0) (2026-07-06)


### Features

* **orchestrator:** allow disabling PR creator branding ([91f6161](https://github.com/djm204/frankenbeast/commit/91f6161673a307fa06f520a457421541bbc5c19a))


### Bug Fixes

* **cli:** surface PR auth failures ([deb8df7](https://github.com/djm204/frankenbeast/commit/deb8df7f7c94a87b106d6729404591a4e0fae871)), closes [#746](https://github.com/djm204/frankenbeast/issues/746)
* **security:** require explicit Grafana credentials ([#822](https://github.com/djm204/frankenbeast/issues/822)) ([6fa7084](https://github.com/djm204/frankenbeast/commit/6fa7084a3f719a045a39fa066d6c4cf120baccd0))
* standardize package namespace strategy ([#825](https://github.com/djm204/frankenbeast/issues/825)) ([a2c236f](https://github.com/djm204/frankenbeast/commit/a2c236f9c7d46ab8fea079b85b3df3e4a7383e9b))
* validate pinned npm install executable ([#821](https://github.com/djm204/frankenbeast/issues/821)) ([0e710c9](https://github.com/djm204/frankenbeast/commit/0e710c9ad9be9e90d169a2c77b118386cdde6bee))


### Documentation

* **type-safety:** inventory explicit any migration plan ([7b01d89](https://github.com/djm204/frankenbeast/commit/7b01d89c70da2dfd07780cfcc244b70c2dc7ac86)), closes [#338](https://github.com/djm204/frankenbeast/issues/338)


### CI/CD

* enforce pinned npm package manager ([#811](https://github.com/djm204/frankenbeast/issues/811)) ([2881063](https://github.com/djm204/frankenbeast/commit/28810638142bea66c5146a0f8495d4a3a06b63a2))
* route security audits through pinned npm ([#829](https://github.com/djm204/frankenbeast/issues/829)) ([003c4d9](https://github.com/djm204/frankenbeast/commit/003c4d9d95671b835948b7abd4725eb265428a66))


### Tests

* **security:** cover npm audit dependency floors ([737e406](https://github.com/djm204/frankenbeast/commit/737e4065fa3d4b1072d2cb37c25f4a819c888b0f)), closes [#498](https://github.com/djm204/frankenbeast/issues/498)
* **security:** guard Turbo advisory floor ([#828](https://github.com/djm204/frankenbeast/issues/828)) ([3d1b054](https://github.com/djm204/frankenbeast/commit/3d1b0545265d88ccb37952809e3563ee355c4883))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).