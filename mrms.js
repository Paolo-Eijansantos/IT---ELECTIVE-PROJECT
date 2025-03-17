const addRoomBtn = document.getElementById('addRoomBtn');
const addRoomModal = document.getElementById('addRoomModal');
        
addRoomBtn.addEventListener('click', () => {
addRoomModal.style.display = 'flex';
        });
        
addRoomModal.addEventListener('click', (e) => {
    if (e.target === addRoomModal) {
        addRoomModal.style.display = 'none';
            }
        });
        
window.addEventListener('click', (e) => {
    if (e.target === addRoomModal) {
        addRoomModal.style.display = 'none';
        }
        });


const editRoomBtn = document.getElementById('editRoomBtn');
const editRoomModal = document.getElementById('editRoomModal');
                
editRoomBtn.addEventListener('click', () => {
editRoomModal.style.display = 'flex';
        });
                
editRoomModal.addEventListener('click', (e) => {
        if (e.target === editRoomModal) {
            editRoomModal.style.display = 'none';
                    }
             });
                
window.addEventListener('click', (e) => {
        if (e.target === editRoomModal) {
            editRoomModal.style.display = 'none';
            }
            });

                   

function select1() {
let selectedValue = document.getElementById("dropdown").value;
document.getElementById("result").innerText = " " + selectedValue;
}
function select2() {
        let selectValue = document.getElementById("dropdown").value;
        document.getElementById("reslt").innerText = " " + selectValue;
        }

const remvRoomBtn = document.getElementById('remvRoomBtn');
const remvRoomModal = document.getElementById('remvRoomModal');
remvRoomBtn.addEventListener('click', () => {
remvRoomModal.style.display = 'flex';
            });
                    
remvRoomModal.addEventListener('click', (e) => {
        if (e.target === remvRoomModal) {
        remvRoomModal.style.display = 'none';
                        }
                 });
                    
window.addEventListener('click', (e) => {
            if (e.target === remvRoomModal) {
                remvRoomModal.style.display = 'none';
                }
                });


const editAvlBtn = document.getElementById('editAvlBtn');
const editAvlModal = document.getElementById('editAvlModal');
editAvlBtn.addEventListener('click', () => {
        editAvlModal.style.display = 'flex';
        });
                                        
        editAvlModal.addEventListener('click', (e) => {
if (e.target === editAvlModal) {
        editAvlModal.style.display = 'none';}
        });
                                        
window.addEventListener('click', (e) => {
if (e.target === editAvlModal) {
        editAvlModal.style.display = 'none';}
});

const setPriceBtn = document.getElementById('setPriceBtn');
const setPriceModal = document.getElementById('setPriceModal');
setPriceBtn.addEventListener('click', () => {
        setPriceModal.style.display = 'flex';
        });
                                        
        setPriceModal.addEventListener('click', (e) => {
if (e.target === setPriceModal) {
        setPriceModal.style.display = 'none';}
        });
                                        
window.addEventListener('click', (e) => {
if (e.target === setPriceModal) {
        setPriceModal.style.display = 'none';}
});

const statusBtn = document.getElementById('statusBtn');
const statusModal = document.getElementById('statusModal');
statusBtn.addEventListener('click', () => {
        statusModal.style.display = 'flex';
        });
                                        
statusModal.addEventListener('click', (e) => {
if (e.target === statusModal) {
        statusModal.style.display = 'none';}
        });
                                        
window.addEventListener('click', (e) => {
if (e.target === statusModal) {
        statusModal.style.display = 'none';}
});

const vRoomsBtn = document.getElementById('vRoomsBtn');
const vRoomsModal = document.getElementById('vRoomsModal');
vRoomsBtn.addEventListener('click', () => {
        vRoomsModal.style.display = 'flex';
        });
                                        
vRoomsModal.addEventListener('click', (e) => {
if (e.target === vRoomsModal) {
        vRoomsModal.style.display = 'none';}
        });
                                        
window.addEventListener('click', (e) => {
if (e.target === vRoomsModal) {
        vRoomsModal.style.display = 'none';}
});
