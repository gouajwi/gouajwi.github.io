section .data
    A dd ?
    B dd ?  
    C dd ?
    D dd ?

section .text
    global _start

_start:
    
    mov eax, [A]
    add eax, [B]
    cmp eax, 15
    jne exit
    
    mov eax, [C]
    sub eax, [D]
    cmp eax, 3
    jne exit
    
    mov eax, [A]
    and eax, [B]
    cmp eax, 5
    jne exit
    
    mov eax, [C]
    or eax, [D]
    cmp eax, 7
    jne exit
    
    ; Exit
    mov eax, 1
    mov ebx, 0
    int 0x80