export const REQUIRED_KEYS = [
  "fw_status",
  "wk_expm1_builtin",
  "wk_JSFunction_m_function",
  "wk_POP_RDI_RET",
  "wk_POP_RSI_RET",
  "wk_POP_RDX_RET",
  "wk_POP_RCX_RET",
  "wk_POP_RAX_RET",
  "wk_POP_R8_RET",
  "wk_POP_R9_RET",
  "wk_LEAVE_RET",
  "wk_MOV_QWORD_PTR_RDI_RAX_RET",
  "wk_MOV_RDI_RSI_30_CALL",
  "wk_POP_RAX_MOV_RAX_JMP_18",
  "wk_PUSH_RBP_MOV_RBP_RSP_10",
  "wk_MOV_RDI_RAX_8_CALL_20",
  "wk_MOV_RDX_RAX_18_CALL_10",
  "wk_PUSH_RDX_POP_RSP_RET",
  "pivot_view_sp",
  "wk_ArrayBuffer_m_impl",
  "wk_ArrayBuffer_m_contents_m_data",
  "wk___imp___error",
  "k__error",
  "k_scan_stage1",
  "k_scan_stage2",
  "k_evf_cv",
  "k_sysent_661",
  "k_jmp_rsi",
];
export const OPTIONAL_KEYS = [
  "k_stubs",
  "wk___imp_pthread_create",
  "k_pthread_create",

  "kpatch",

  "payload",

  "alias_of",

  "k_idt_rsvd",
];

export const PS4 = {

  "13.00": {
    fw_status:
      "state=proven step10=32/0-x3 reboot=0 webkit=step7-20/20 anchor=findcaller kernel_rvas=verified-on-hardware kpatch=1300.bin-10-sites-verified bug=poops",

    k_idt_rsvd: 0x1c1d40,

    wk_expm1_builtin: 0x2586880,
    wk_JSFunction_m_function: 0x28,

    wk_POP_RDI_RET: 0x5c480,
    wk_POP_RSI_RET: 0x6e45e,
    wk_POP_RDX_RET: 0x12c5ba,
    wk_POP_RCX_RET: 0x1bade,
    wk_POP_RAX_RET: 0x10504,
    wk_POP_R8_RET: 0x9b311,
    wk_POP_R9_RET: 0x1dcfb1,
    wk_LEAVE_RET: 0x182f7,
    wk_MOV_QWORD_PTR_RDI_RAX_RET: 0x548b,
    wk_PUSH_RDX_POP_RSP_RET: 0x2abccaa,
    wk_MOV_RDI_RSI_30_CALL: 0x295f948,
    wk_POP_RAX_MOV_RAX_JMP_18: 0x1d989e3,
    wk_PUSH_RBP_MOV_RBP_RSP_10: 0x25bae0,
    wk_MOV_RDI_RAX_8_CALL_20: 0x4a0406,
    wk_MOV_RDX_RAX_18_CALL_10: 0x1ec3ada,

    pivot_view_sp: 0x38,
    wk_ArrayBuffer_m_impl: 0x10,
    wk_ArrayBuffer_m_contents_m_data: 0x10,

    wk___imp___error: 0x3cb8cc8,
    k__error: 0x26420,
    wk___imp_pthread_create: 0x3cb9c00,
    k_pthread_create: 0x10110,

    k_stubs: {
      3: 0x2c170,
      4: 0x2b8d0,
      5: 0x2b970,
      6: 0x2d620,
      20: 0x2cb70,
      23: 0x2b6f0,
      24: 0x2d5e0,
      25: 0x2b4d0,
      30: 0x2c9d0,
      54: 0x2cff0,
      92: 0x2b650,
      97: 0x2d050,
      98: 0x2b5f0,
      104: 0x2d380,
      105: 0x2b490,
      106: 0x2d480,
      118: 0x2b2f0,
      135: 0x2c280,
      240: 0x2d4c0,
      331: 0x2c6b0,
      432: 0x2b510,
      466: 0x2cc70,
      487: 0x2ba80,
      488: 0x2bd10,
      538: 0x2b430,
      539: 0x2b4f0,
      544: 0x2beb0,
      545: 0x2ca30,
      632: 0x2d090,
      633: 0x2d840,
      662: 0x2ccb0,
      663: 0x2c3e0,
      664: 0x2d740,
      666: 0x2d540,
      669: 0x2bdf0,
    },
    k_scan_stage1: 0x40000,
    k_scan_stage2: 0x60000,

    k_kl_lock: 0xe6c20,

    k_evf_cv: 0x0,
    k_sysent_661: 0x110a760,
    k_jmp_rsi: 0x47b31,

    payload: "payload.bin",
    k_oid_kern_file: 0x1a2f8a0,
    k_oid_maxfilesperproc: 0x1a2f950,
    k_oid_maxprocperuid: 0x1a3ba88,
    k_oid_maxfiles: 0x1a2f9a8,
    k_arg1_maxfilesperproc: 0x22cc47c,
    k_arg1_maxprocperuid: 0x22cc478,
    k_arg1_maxfiles: 0x22cc474,
    k_sysctl_handle_int: 0x3fa090,
    k_prison0: 0x1a5c0c0,
    k_rootvnode: 0x2136e90,
    k_sysent: 0x1102b70,
  },
};

PS4["13.50"] = {
  fw_status:
    "state=663-JB-PROVEN-on-hw webkit=13.00-module libkernel=13.50-stubs " +
    "kernel_rvas=MEASURED-from-kernel_1350.elf (kderive 16/16, adversarial 16/16 GO) " +
    "kpatch=1350.bin-BUILT-10/10-neg-controls-pass-UNTESTED-on-hw payload=payload2.bin-PS4HEN(works<=13.52) bug=663",

  wk_expm1_builtin: 0x2586880,
  wk_JSFunction_m_function: 0x28,

  wk_POP_RDI_RET: 0x5c480,
  wk_POP_RSI_RET: 0x6e45e,
  wk_POP_RDX_RET: 0x12c5ba,
  wk_POP_RCX_RET: 0x1bade,
  wk_POP_RAX_RET: 0x10504,
  wk_POP_R8_RET: 0x9b311,
  wk_POP_R9_RET: 0x1dcfb1,
  wk_LEAVE_RET: 0x182f7,
  wk_MOV_QWORD_PTR_RDI_RAX_RET: 0x548b,
  wk_PUSH_RDX_POP_RSP_RET: 0x2abccaa,
  wk_MOV_RDI_RSI_30_CALL: 0x295f948,
  wk_POP_RAX_MOV_RAX_JMP_18: 0x1d989e3,
  wk_PUSH_RBP_MOV_RBP_RSP_10: 0x25bae0,
  wk_MOV_RDI_RAX_8_CALL_20: 0x4a0406,
  wk_MOV_RDX_RAX_18_CALL_10: 0x1ec3ada,

  pivot_view_sp: 0x38,
  wk_ArrayBuffer_m_impl: 0x10,
  wk_ArrayBuffer_m_contents_m_data: 0x10,

  wk___imp___error: 0x3cb8cc8,
  k__error: 0x1a0f0,
  wk___imp_pthread_create: 0x3cb9c00,
  k_pthread_create: 0x21790,

  k_stubs: {
    3: 0x2c170,
    4: 0x2b8d0,
    5: 0x2b970,
    6: 0x2d620,
    20: 0x2cb70,
    23: 0x2b6f0,
    24: 0x2d5e0,
    25: 0x2b4d0,
    30: 0x2c9d0,
    54: 0x2cff0,
    92: 0x2b650,
    97: 0x2d050,
    98: 0x2b5f0,
    104: 0x2d380,
    105: 0x2b490,
    106: 0x2d480,
    118: 0x2b2f0,
    135: 0x2c280,
    240: 0x2d4c0,
    331: 0x2c6b0,
    432: 0x2b510,
    466: 0x2cc70,
    487: 0x2ba80,
    488: 0x2bd10,
    538: 0x2b430,
    539: 0x2b4f0,
    544: 0x2beb0,
    545: 0x2ca30,
    632: 0x2d090,
    633: 0x2d840,
    662: 0x2ccb0,
    663: 0x2c3e0,
    664: 0x2d740,
    666: 0x2d540,
    669: 0x2bdf0,
  },
  k_scan_stage1: 0x40000,
  k_scan_stage2: 0x60000,

  // KERNEL RVAs measured 2026-09-16 from kernel_1350.elf (kdump5 tier0->rebase
  // ->tier1, kderive 16/16, adversarially verified 16/16 GO). 13.50 is its own
  // build (!= 13.52): .text moved from 13.00 by idt_rsvd +0x20, sysctl_handle_int
  // +0x450, evf_cv +0x440; jmp_rsi/kl_lock/sysent carried; all .data identical.
  k_idt_rsvd: 0x1c1d60,
  k_sysctl_handle_int: 0x3fa4e0,
  k_jmp_rsi: 0x47b31,
  k_kl_lock: 0xe6c20,
  k_evf_cv: 0x784e18,
  k_sysent: 0x1102b70,
  k_sysent_661: 0x110a760,
  k_oid_kern_file: 0x1a2f8a0,
  k_oid_maxfilesperproc: 0x1a2f950,
  k_oid_maxprocperuid: 0x1a3ba88,
  k_oid_maxfiles: 0x1a2f9a8,
  k_arg1_maxfilesperproc: 0x22cc47c,
  k_arg1_maxprocperuid: 0x22cc478,
  k_arg1_maxfiles: 0x22cc474,
  k_prison0: 0x1a5c0c0,
  k_rootvnode: 0x2136e90,
  kpatch: "1350.bin", // BUILT (anchored in kernel_1350.elf); kpatch.js 10/10, both neg controls refuse; UNTESTED on hw
  payload: "payload2.bin", // PS4-HEN, works through 13.52
};

PS4["13.52"] = Object.assign({}, PS4["13.50"], {
  alias_of: "13.50",

  k_idt_rsvd: 0x1c1e00,

  k_oid_kern_file: 0x1a2f8a0,
  k_oid_maxfilesperproc: 0x1a2f950,
  k_oid_maxprocperuid: 0x1a3ba88,
  k_oid_maxfiles: 0x1a2f9a8,
  k_arg1_maxfilesperproc: 0x22cc47c,
  k_arg1_maxprocperuid: 0x22cc478,
  k_arg1_maxfiles: 0x22cc474,
  k_sysctl_handle_int: 0x3fa8e0,
  k_prison0: 0x1a5c0c0,
  k_rootvnode: 0x2136e90,
  k_sysent: 0x1102b70,
  k_sysent_661: 0x110a760,
  k_jmp_rsi: 0x4d6d0,

  k_kl_lock: 0xe6c60,
  k_evf_cv: 0x785228,

  kpatch: "1352.bin",

  payload: "goldhen.bin",
  fw_status:
    "state=663-LIVE-on-hardware shares=13.50 (webkit+libkernel) " +
    "kernel_rvas=MEASURED-from-kernel_1352.elf (kdump5 tier1 36MB pass=39/0, " +
    "kderive 16/16 recipes) kpatch=1352.bin-24-sites-verified-OFFLINE-ONLY " +
    "payload=payload2.bin-PS4HEN-native-1352 (patched-GoldHEN KP'd 2/2) " +
    "bug=663",
});

PS4["13.02"] = Object.assign({}, PS4["13.00"], {
  alias_of: "13.00", // WebKit + libkernel only; kernel side below is MEASURED

  k_idt_rsvd: 0x1c1d50,
  k_sysctl_handle_int: 0x3fa0a0,
  k_jmp_rsi: 0x47b31,
  k_kl_lock: 0xe6c20,
  k_evf_cv: 0x7849d8,
  k_sysent: 0x1102b70,
  k_sysent_661: 0x110a760,
  k_oid_kern_file: 0x1a2f8a0,
  k_oid_maxfilesperproc: 0x1a2f950,
  k_oid_maxprocperuid: 0x1a3ba88,
  k_oid_maxfiles: 0x1a2f9a8,
  k_arg1_maxfilesperproc: 0x22cc47c,
  k_arg1_maxprocperuid: 0x22cc478,
  k_arg1_maxfiles: 0x22cc474,
  k_prison0: 0x1a5c0c0,
  k_rootvnode: 0x2136e90,
  kpatch: "1302.bin", // ported from 1300.c, 18 sites +0x10; HW-PROVEN on 13.02 (KEXEC rc=0, pass=51)
  payload: "payload2.bin", // PS4-HEN, works through 13.52; replaces the non-shipped 13.00 placeholder
  fw_status:
    "state=663-JB+KPATCH-PROVEN-on-hw-pass=51 shares=13.00 (webkit+libkernel, PRIMITIVE-OK) " +
    "kernel_rvas=MEASURED-from-kernel_1302.elf (16/16 GO) same-kernel-as=13.04 " +
    "kpatch=1302.bin-HW-PROVEN-KEXEC-rc0 payload=payload2.bin-PS4HEN(works<=13.52) bug=663",
});

PS4["13.04"] = Object.assign({}, PS4["13.00"], {
  alias_of: "13.00", // WebKit + libkernel only; kernel side below is MEASURED

  k_idt_rsvd: 0x1c1d50,
  k_sysctl_handle_int: 0x3fa0a0,
  k_jmp_rsi: 0x47b31,
  k_kl_lock: 0xe6c20,
  k_evf_cv: 0x7849d8,
  k_sysent: 0x1102b70,
  k_sysent_661: 0x110a760,
  k_oid_kern_file: 0x1a2f8a0,
  k_oid_maxfilesperproc: 0x1a2f950,
  k_oid_maxprocperuid: 0x1a3ba88,
  k_oid_maxfiles: 0x1a2f9a8,
  k_arg1_maxfilesperproc: 0x22cc47c,
  k_arg1_maxprocperuid: 0x22cc478,
  k_arg1_maxfiles: 0x22cc474,
  k_prison0: 0x1a5c0c0,
  k_rootvnode: 0x2136e90,
  kpatch: "1302.bin", // SAME kernel as 13.02 -> reuses the one blob (HW-PROVEN on 13.02)
  payload: "payload2.bin", // PS4-HEN, works through 13.52
  fw_status:
    "state=663-JB+KPATCH-via-13.02(pass=51) shares=13.00 (webkit+libkernel, PRIMITIVE-OK) " +
    "kernel_rvas=SAME-KERNEL-AS-13.02 (measured from kernel_1302.elf, 16/16 GO) " +
    "kpatch=1302.bin-shared-HW-PROVEN payload=payload2.bin-PS4HEN(works<=13.52) bug=663",
});

export function offsetsFor(uaString) {
  const m = (uaString || "").match(/PlayStation\s+4[\/ ](\d+)\.(\d+)/);
  if (!m) return { key: null, off: null };

  const key = m[1] + "." + parseInt(m[2], 16).toString(16).padStart(2, "0");
  return { key, off: PS4[key] || null };
}
