var TRENCH_DATA = {
  "_source": "Warren Sharp 2026 Preview - per-team offensive line & defensive front prose",
  "_note": "Granular trench stats extracted team-by-team. Ranks are 1-32 (1=best) unless noted. Fields present only where the book states them; missing fields fall back to positional Front7/OL ranks in the model. def_rb_ypc = yards per carry allowed to RBs; def_ybc = yards before contact allowed per RB rush; ol_pbwr_rk = offensive-line pass block win rate rank; ol_rbwr_rk = run block win rate rank; blitz_pct/blitz_rk from the defensive tendencies line.",
  "teams": {
    "Arizona Cardinals": {
      "ol_note": "Bolstered line (Seumalo, Wilkinson, drafted Bisontis). Ranked 26th in pressure rate allowed; struggled to open run lanes.",
      "ol_pressure_rate_allowed_rk": 26,
      "def_rb_ypc": 4.8, "def_rb_ypc_rk": 27,
      "def_ybc": 3.38, "def_ybc_rk": 27,
      "def_pressure_rate_rk": 27,
      "def_sack_rate_rk": 28,
      "blitz_pct": 24, "blitz_rk": 21,
      "def_note": "27th pressure rate, 28th sack rate despite investing in pass rush; struggled to stop the run."
    },
    "Atlanta Falcons": {
      "ol_pbwr_rk": 14,
      "ol_note": "O-line slipped 7th->10th; 14th in pass block win rate; very healthy unit; added Jawaan Taylor at RT.",
      "def_rb_ypc": 4.5, "def_rb_ypc_rk": 23,
      "def_explosive_run_rk": 27,
      "def_pressure_rate": 37.0, "def_pressure_rate_rk": 15,
      "def_sacks": 57, "def_sacks_rk": 2,
      "blitz_pct": 35, "blitz_rk": 2,
      "def_note": "Front 7 a major weakness (#31); 4.6 YPC allowed; led by 57 sacks (2nd) but relied on high sack-to-pressure ratio; pass rush dismantled this offseason."
    },
    "Baltimore Ravens": {
      "def_rb_ypc": 4.2, "def_rb_ypc_rk": 13,
      "def_ybc_rk": 12,
      "def_pressure_rate": 31.5, "def_pressure_rate_rk": 28,
      "def_sacks": 30, "def_sacks_rk": 28,
      "blitz_pct": 24, "blitz_rk": 19,
      "def_note": "Pass rush bottomed out (28th pressure & sacks); added Trey Hendrickson to fix it; midpack run D."
    },
    "Buffalo Bills": {
      "def_rb_ypc": 5.0, "def_rb_ypc_rk": 30,
      "def_explosive_run_rk": 30,
      "def_pressure_rate": 37.3, "def_pressure_rate_rk": 14,
      "def_sacks": 36, "def_sacks_rk": 20,
      "def_pass_ypa_allowed": 6.2, "def_pass_ypa_allowed_rk": 4,
      "def_pass_epa_rk": 7,
      "blitz_pct": 22, "blitz_rk": 25,
      "def_note": "Struggled vs run (30th YPC) but strong vs pass (4th YPA, 7th pass EPA); added Bradley Chubb to edge."
    },
    "Carolina Panthers": {
      "def_rb_ypc": 4.6, "def_rb_ypc_rk": 24,
      "def_ybc_rk": 31,
      "def_pressure_rate": 29.6, "def_pressure_rate_rk": 31,
      "def_sacks": 30, "def_sacks_rk": 28,
      "def_pass_ypa_allowed": 7.2, "def_pass_ypa_allowed_rk": 21,
      "def_pass_epa_rk": 23,
      "blitz_pct": 27, "blitz_rk": 15,
      "def_note": "Weak pass rush (31st pressure, 28th sacks); signed Jaelan Phillips & Devin Lloyd to upgrade front; poor vs run (31st YBC)."
    },
    "Chicago Bears": {
      "def_rb_ypc": 4.8,
      "def_ybc_rk": 30,
      "def_pressure_rate": 31.5, "def_pressure_rate_rk": 29,
      "def_sacks": 35, "def_sacks_rk": 22,
      "def_pass_ypa_allowed": 7.6, "def_pass_ypa_allowed_rk": 28,
      "def_pass_epa_rk": 19,
      "blitz_pct": 29, "blitz_rk": 9,
      "def_note": "Non-existent pass rush (29th pressure); Montez Sweat lone bright spot; poor run D (30th YBC) & pass D (28th YPA)."
    },
    "Cincinnati Bengals": {
      "ol_pbwr_rk": 27,
      "ol_note": "Ranked #27 or worse in pass block win rate for FIVE straight seasons; chronic protection problem for Burrow.",
      "def_rb_ypc": 5.2, "def_rb_ypc_rk": 31,
      "def_ybc_rk": 29,
      "def_explosive_run_rk": 27,
      "def_pressure_rate": 33.4, "def_pressure_rate_rk": 24,
      "def_sacks": 35, "def_sacks_rk": 22,
      "def_pass_ypa_allowed_rk": 29,
      "def_pass_epa_rk": 28,
      "blitz_pct": 17, "blitz_rk": 32,
      "def_note": "One of worst defenses in league; 31st run D, 29th pass YPA, 28th pass EPA; blitzes least in NFL (17%); added Dexter Lawrence & Jonathan Allen."
    },
    "Cleveland Browns": {
      "ol_note": "Offensive line ranked #32 (worst in NFL) in positional units.",
      "def_rb_ypc": 4.2, "def_rb_ypc_rk": 13,
      "def_ybc": 0.87, "def_ybc_rk": 2,
      "def_pressure_rate": 39.5, "def_pressure_rate_rk": 8,
      "def_sacks": 53, "def_sacks_rk": 3,
      "def_pass_ypa_allowed": 6.6, "def_pass_ypa_allowed_rk": 9,
      "def_pass_epa_rk": 1,
      "blitz_pct": 28, "blitz_rk": 12,
      "def_note": "Elite defense: 8th pressure, 3rd sacks, 1st in pass EPA allowed, 2nd in YBC; strong front 7 (#6)."
    },
    "Dallas Cowboys": {
      "def_rb_ypc": 4.7, "def_rb_ypc_rk": 26,
      "def_explosive_run_rk": 31,
      "def_pressure_rate": 39.7, "def_pressure_rate_rk": 7,
      "def_sacks": 35, "def_sacks_rk": 22,
      "def_pass_ypa_allowed": 8.1, "def_pass_ypa_allowed_rk": 31,
      "blitz_pct": 28, "blitz_rk": 11,
      "def_note": "Good pass rush (7th pressure) but poor run D (26th) & awful vs pass (31st YPA); Quinnen Williams improved run front late; added Rashan Gary."
    },
    "Denver Broncos": {
      "ol_note": "Offensive line ranked #1 in positional units.",
      "def_rb_ypc": 3.9, "def_rb_ypc_rk": 3,
      "def_pressure_rate": 41.8, "def_pressure_rate_rk": 3,
      "def_sacks": 68, "def_sacks_rk": 1,
      "def_pass_ypa_allowed": 6.1, "def_pass_ypa_allowed_rk": 2,
      "def_pass_epa_rk": 10,
      "blitz_pct": 32, "blitz_rk": 4,
      "def_note": "Elite front: led NFL with 68 sacks, 3rd pressure, 3rd run D, 2nd pass YPA; top-5 units across the board (Front7 #4, Secondary #2)."
    },
    "Detroit Lions": {
      "ol_pbwr_rk": 31,
      "ol_note": "O-line dropped to 31st in pass block win rate (was 12th in 2024); Goff sacked career-high 38 times (7th most).",
      "def_rb_ypc": 4.3, "def_rb_ypc_rk": 18,
      "def_negative_run_rk": 30,
      "def_pressure_rate": 36.8, "def_pressure_rate_rk": 17,
      "def_sacks": 49, "def_sacks_rk": 4,
      "def_pass_ypa_allowed": 7.3, "def_pass_ypa_allowed_rk": 24,
      "def_pass_epa_rk": 15,
      "blitz_pct": 24, "blitz_rk": 20,
      "def_note": "49 sacks (4th) led by Aidan Hutchinson but middling pressure rate (17th); run D slipped (18th); depth thin opposite Hutchinson."
    },
    "Green Bay Packers": {
      "def_rb_ypc": 4.1, "def_rb_ypc_rk": 11,
      "def_explosive_run_rk": 5,
      "def_pressure_rate": 39.4, "def_pressure_rate_rk": 9,
      "def_sacks": 36, "def_sacks_rk": 20,
      "def_pass_ypa_allowed": 6.4, "def_pass_ypa_allowed_rk": 6,
      "def_pass_epa_rk": 24,
      "blitz_pct": 21, "blitz_rk": 28,
      "def_note": "Solid front (9th pressure, 11th run D); Micah Parsons added (19.4% pressure) though ACL late; new coordinator Gannon brings 3-4 look; low blitz rate."
    },
    "Houston Texans": {
      "ol_note": "Offensive line ranked #31 (near-worst) - major weakness protecting C.J. Stroud.",
      "def_rb_ypc": 3.7, "def_rb_ypc_rk": 2,
      "def_pressure_rate": 42.2, "def_pressure_rate_rk": 2,
      "def_sacks": 47, "def_sacks_rk": 7,
      "def_pass_ypa_allowed": 6.5, "def_pass_ypa_allowed_rk": 7,
      "def_pass_epa_rk": 2,
      "blitz_pct": 22, "blitz_rk": 23,
      "def_note": "Elite defense: 2nd pressure, 2nd run D, 2nd pass EPA; Anderson & Hunter one of best pass-rush duos; Front7 #1, Secondary #1."
    },
    "Indianapolis Colts": {
      "def_rb_ypc": 4.0, "def_rb_ypc_rk": 7,
      "def_pressure_rate": 34.2, "def_pressure_rate_rk": 23,
      "def_sacks": 39, "def_sacks_rk": 15,
      "def_pass_ypa_allowed": 7.1, "def_pass_ypa_allowed_rk": 19,
      "def_pass_epa_rk": 21,
      "blitz_pct": 28, "blitz_rk": 12,
      "def_note": "Good run D (7th) but weak pass rush (23rd pressure); Sauce Gardner + Ward secondary upside if healthy."
    },
    "Jacksonville Jaguars": {
      "def_rb_ypc": 3.9, "def_rb_ypc_rk": 4,
      "def_pressure_rate": 36.2, "def_pressure_rate_rk": 19,
      "def_sacks": 32, "def_sacks_rk": 27,
      "def_pass_ypa_allowed": 6.2, "def_pass_ypa_allowed_rk": 3,
      "def_pass_epa_rk": 4,
      "blitz_pct": 27, "blitz_rk": 15,
      "def_note": "Elite pass D (3rd YPA, 4th pass EPA) & strong run D (4th) but low sack total (27th); no established edge depth behind Hines-Allen/Walker."
    },
    "Kansas City Chiefs": {
      "def_rb_ypc": 4.0,
      "def_pressure_rate_rk": 10,
      "def_sacks": 35, "def_sacks_rk": 22,
      "def_pass_ypa_allowed": 6.9, "def_pass_ypa_allowed_rk": 14,
      "def_pass_epa_rk": 12,
      "blitz_pct": 33, "blitz_rk": 3,
      "def_note": "Solid all-round D (10th pressure) but low sack total (22nd); Chris Jones anchors; secondary reshuffled (lost McDuffie & Watson); high blitz rate (3rd)."
    },
    "Las Vegas Raiders": {
      "def_ybc_rk": 3,
      "def_pressure_rate_rk": 25,
      "def_pass_ypa_allowed": 7.0, "def_pass_ypa_allowed_rk": 15,
      "def_int_rate_rk": 26,
      "blitz_pct": 22, "blitz_rk": 23,
      "def_note": "Stout vs run (3rd YBC) but weak pass rush (25th pressure) despite Maxx Crosby; added Kwity Paye; low takeaways (26th INT rate)."
    },
    "Los Angeles Chargers": {
      "def_rb_ypc": 4.3, "def_rb_ypc_rk": 16,
      "def_pressure_rate": 36.9, "def_pressure_rate_rk": 16,
      "def_sacks": 45, "def_sacks_rk": 10,
      "def_pass_ypa_allowed": 6.6, "def_pass_ypa_allowed_rk": 8,
      "def_pass_epa_rk": 8,
      "blitz_pct": 19, "blitz_rk": 29,
      "def_note": "Balanced D: 45 sacks (10th), strong pass D (8th YPA & EPA); Tuli Tuipulotu breakout; Khalil Mack returns; low blitz rate (29th)."
    },
    "Los Angeles Rams": {
      "def_rb_ypc": 4.2, "def_rb_ypc_rk": 14,
      "def_pressure_rate": 41.6, "def_pressure_rate_rk": 4,
      "def_sacks": 47, "def_sacks_rk": 7,
      "def_pass_ypa_allowed": 6.8,
      "def_pass_epa_rk": 6,
      "blitz_pct": 18, "blitz_rk": 31,
      "def_note": "Elite front (4th pressure, 7th sacks); added Myles Garrett (17.1% career pressure) to a loaded Front 7 (#3); reshaped secondary w/ McDuffie & Watson; lowest-blitz D (31st)."
    },
    "Miami Dolphins": {
      "ol_note": "Offensive line ranked #29 - a weakness.",
      "def_rb_ypc": 4.8, "def_rb_ypc_rk": 28,
      "def_explosive_run_rk": 29,
      "def_pressure_rate": 31.8, "def_pressure_rate_rk": 26,
      "def_sacks": 39, "def_sacks_rk": 15,
      "def_pass_ypa_allowed": 7.6, "def_pass_ypa_allowed_rk": 25,
      "def_pass_epa_rk": 25,
      "blitz_pct": 30, "blitz_rk": 6,
      "def_note": "Weak across the board: 28th run D, 26th pressure, 25th pass EPA; Front7 #32 & Secondary #32 (worst units in NFL); bare cornerback room."
    },
    "Minnesota Vikings": {
      "def_rb_ypc": 3.9, "def_rb_ypc_rk": 5,
      "def_negative_run_rk": 3,
      "def_ybc_rk": 4,
      "def_pressure_rate": 44.5, "def_pressure_rate_rk": 1,
      "def_sacks": 49, "def_sacks_rk": 4,
      "def_pass_ypa_allowed": 6.8, "def_pass_ypa_allowed_rk": 11,
      "def_pass_epa_rk": 3,
      "blitz_pct": 48, "blitz_rk": 1,
      "def_note": "#1 pressure rate (44.5%) & blitzes MOST in league (48%); 4th in sacks; 5th run D, 3rd pass EPA; aggressive scheme - dangerous vs QBs who struggle when blitzed."
    },
    "New England Patriots": {
      "def_rb_ypc": 3.9, "def_rb_ypc_rk": 6,
      "def_explosive_run_rk": 4,
      "def_pressure_rate": 38.4, "def_pressure_rate_rk": 12,
      "def_sacks": 35, "def_sacks_rk": 22,
      "def_pass_ypa_allowed": 6.7, "def_pass_ypa_allowed_rk": 10,
      "def_pass_epa_rk": 11,
      "blitz_pct": 28, "blitz_rk": 14,
      "def_note": "Solid all-round D: 6th run D, 12th pressure, strong secondary (#5); low sack total (22nd); Gonzalez anchors coverage."
    },
    "New Orleans Saints": {
      "def_rb_ypc": 4.0,
      "def_explosive_run_rk": 9,
      "def_pressure_rate_rk": 22,
      "def_sacks": 45, "def_sacks_rk": 10,
      "def_pass_ypa_allowed_rk": 13,
      "def_pass_epa_rk": 13,
      "blitz_pct": 25, "blitz_rk": 18,
      "def_note": "Middling pressure (22nd) but 45 sacks (10th); solid run D & midpack pass D (13th); Chase Young the pass-rush bright spot."
    },
    "New York Giants": {
      "def_rb_ypc": 5.5, "def_rb_ypc_rk": 32,
      "def_ybc": 1.85,
      "def_pressure_rate": 34.9, "def_pressure_rate_rk": 21,
      "def_sacks": 39, "def_sacks_rk": 15,
      "def_pass_ypa_allowed": 7.1, "def_pass_ypa_allowed_rk": 18,
      "def_pass_epa_rk": 17,
      "blitz_pct": 24, "blitz_rk": 20,
      "def_note": "WORST run D in league (5.5 YPC, 32nd) after trading Dexter Lawrence; middling pass rush (21st) despite Burns/Carter/Thibodeaux edge talent."
    },
    "New York Jets": {
      "def_pressure_rate": 28.3, "def_pressure_rate_rk": 32,
      "def_sacks": 26, "def_sacks_rk": 31,
      "def_takeaways": 4, "def_takeaways_rk": 32,
      "def_turnover_margin_rk": 32,
      "blitz_pct": 22, "blitz_rk": 23,
      "def_note": "DEAD LAST in pressure rate (28.3%), 31st in sacks (26), record-low 4 takeaways (32nd); added Montez Sweat & David Bailey to fix rush."
    },
    "Philadelphia Eagles": {
      "ol_note": "Offensive line ranked #2 in positional units.",
      "def_rb_ypc": 4.2, "def_rb_ypc_rk": 12,
      "def_negative_run_rk": 28,
      "def_pass_ypa_allowed": 6.4, "def_pass_ypa_allowed_rk": 5,
      "def_pass_epa_rk": 9,
      "def_pass_tds_allowed": 14,
      "blitz_pct": 20, "blitz_rk": 30,
      "def_note": "Historically stingy pass D: allowed just 14 pass TDs (fewest in NFL), 5th YPA, led NFL in 3rd-down & red-zone pass D; loaded Front 7 (#2); rarely blitzes (30th)."
    },
    "Pittsburgh Steelers": {
      "def_rb_ypc": 4.3, "def_rb_ypc_rk": 17,
      "def_rush_tds_allowed": 5, "def_rush_tds_allowed_rk": 1,
      "def_pressure_rate": 37.4, "def_pressure_rate_rk": 13,
      "def_sacks": 48, "def_sacks_rk": 6,
      "def_pass_ypa_allowed": 7.2, "def_pass_ypa_allowed_rk": 23,
      "def_pass_epa_rk": 16,
      "blitz_pct": 24, "blitz_rk": 20,
      "def_note": "48 sacks (6th) led by T.J. Watt; 1st in fewest rush TDs allowed; strong Front7 (#7) & Secondary (#7); pass YPA slipped (23rd)."
    },
    "San Francisco 49ers": {
      "ol_note": "Offensive line ranked #7; Trent Williams elite (5th among tackles in run block win rate, 20th pass block win rate); PFF blamed just 16 sacks on the line.",
      "ol_pbwr_rk": 20,
      "def_rb_ypc": 4.5, "def_rb_ypc_rk": 22,
      "def_run_success_rk": 30,
      "def_pass_ypa_allowed": 7.0, "def_pass_ypa_allowed_rk": 16,
      "def_pass_epa_rk": 26,
      "blitz_pct": 24, "blitz_rk": 19,
      "def_note": "Weak pass rush hurt them (26th pass EPA); poor run success allowed (30th); added Osa Odighizuwa; strong corner room (Lenoir/Green) underperformed."
    },
    "Seattle Seahawks": {
      "ol_note": "Offensive line improved from #30 preseason; allowed just 27 sacks (5th-fewest); ranked #8 run block win rate, #12 pass block win rate; one of healthiest units.",
      "ol_pbwr_rk": 12, "ol_rbwr_rk": 8,
      "def_rb_ypc": 3.7, "def_rb_ypc_rk": 1,
      "def_pressure_rate": 39.9, "def_pressure_rate_rk": 6,
      "def_sacks": 47, "def_sacks_rk": 7,
      "blitz_pct": 26, "blitz_rk": 16,
      "def_note": "League-BEST run D (3.7 YPC, 1st); 6th pressure, 7th sacks; Secondary #2 (behind only Denver); Front7 #5; four players 6+ sacks all return."
    },
    "Tampa Bay Buccaneers": {
      "ol_note": "Offensive line ranked #4 in positional units - a strength.",
      "def_rb_ypc": 4.3, "def_rb_ypc_rk": 19,
      "def_negative_run_rk": 1,
      "def_pressure_rate": 38.7, "def_pressure_rate_rk": 11,
      "def_sacks": 37, "def_sacks_rk": 18,
      "def_pass_ypa_allowed_rk": 27,
      "blitz_pct": 21, "blitz_rk": 28,
      "def_note": "Led league in negative-run rate & 11th in pressure, but struggled vs pass (27th YPA); strong O-line (#4); Vita Vea anchors front."
    },
    "Tennessee Titans": {
      "def_rb_ypc": 4.3, "def_rb_ypc_rk": 20,
      "def_ybc_rk": 1,
      "def_pressure_rate_rk": 18,
      "def_sacks": 42, "def_sacks_rk": 12,
      "def_pass_ypa_allowed": 8.2, "def_pass_ypa_allowed_rk": 32,
      "def_explosive_pass_rk": 29,
      "blitz_pct": 24, "blitz_rk": 20,
      "def_note": "DEAD LAST vs pass (8.2 YPA, 32nd) & 29th explosive pass allowed; 1st in YBC & 12th sacks; Simmons anchors front; overhauled secondary."
    },
    "Washington Commanders": {
      "def_rb_ypc_rk": 25,
      "def_explosive_run_rk": 26,
      "def_ybc_rk": 25,
      "def_pressure_rate": 35.6, "def_pressure_rate_rk": 20,
      "def_sacks": 42, "def_sacks_rk": 12,
      "def_pass_ypa_allowed": 8.1, "def_pass_ypa_allowed_rk": 30,
      "def_explosive_pass_rk": 24,
      "blitz_pct": 21, "blitz_rk": 27,
      "def_note": "Bottom-tier run D (25th) & poor pass D (30th YPA); 42 sacks (12th) but only 20th pressure; rebuilt pass rush (Oweh, Chaisson, Omenihu)."
    }
  }
}
;
