// Toggle accordion sections
document.querySelectorAll('.accordion h2').forEach(section => {
    section.addEventListener('click', () => {
        const content = section.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Open and close dialog
function closeDialog(id) {
    document.getElementById(id).close();
}
document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
});
document.querySelectorAll('p[onclick]').forEach(p => {
    p.addEventListener('click', () => document.getElementById(p.getAttribute('onclick').match(/'(.+)'/)[1]).showModal());
});