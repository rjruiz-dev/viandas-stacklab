/* ============================================================
   Viandas StackLab — Tests Unitarios
   Ejecutar abriendo tests.html en cualquier navegador
   ============================================================ */

(function () {
  'use strict';

  var results = [];
  var passCount = 0;
  var failCount = 0;

  function test(name, fn) {
    try {
      fn();
      results.push({ name: name, status: 'PASS' });
      passCount++;
    } catch (e) {
      results.push({ name: name, status: 'FAIL', error: e.message });
      failCount++;
    }
  }

  function assertEqual(actual, expected, msg) {
    if (actual !== expected) {
      throw new Error((msg || 'Assertion failed') + ': expected ' + expected + ', got ' + actual);
    }
  }

  function assertTrue(value, msg) {
    if (!value) {
      throw new Error(msg || 'Expected true, got false');
    }
  }

  /* --------------------------------------------------------
     Suite de Pruebas
     -------------------------------------------------------- */

  test('01. storageAvailable() detecta localStorage', function () {
    assertTrue(ViandasApp.storageAvailable(), 'localStorage debería estar disponible');
  });

  test('02. Guardar y leer usuario', function () {
    var user = { name: 'Martín Fernández', attendance: [true, false, true, false, false] };
    ViandasApp.saveUser(user);
    var read = ViandasApp.getCurrentUser();
    assertEqual(read.name, 'Martín Fernández', 'Nombre de usuario');
    assertEqual(read.attendance[0], true, 'Lunes asiste');
    assertEqual(read.attendance[1], false, 'Martes no asiste');
  });

  test('03. Confirmación con plato específico', function () {
    ViandasApp.saveConfirmation('2026-05-12', ViandasApp.buildConfirmation({ late: false, dishIndex: 2 }));
    var conf = ViandasApp.getConfirmations();
    assertTrue(conf['2026-05-12'].confirmed, 'Debería estar confirmado');
    assertEqual(conf['2026-05-12'].dishIndex, 2, 'Plato índice 2');
  });

  test('04. Cancelar confirmación', function () {
    ViandasApp.saveConfirmation('2026-05-13', ViandasApp.buildConfirmation({ late: false, dishIndex: 0 }));
    ViandasApp.removeConfirmation('2026-05-13');
    var conf = ViandasApp.getConfirmations();
    assertTrue(!conf['2026-05-13'], 'Confirmación debería haber sido eliminada');
  });

  test('05. getStatusClass: sin confirmación = missing', function () {
    var cls = ViandasApp.getStatusClass('2026-05-20', false);
    assertEqual(cls, 'status-missing', 'Sin confirmación debería ser missing');
  });

  test('06. getStatusClass: confirmado a tiempo = ok', function () {
    ViandasApp.saveConfirmation('2026-05-21', ViandasApp.buildConfirmation({ late: false, dishIndex: 1 }));
    var cls = ViandasApp.getStatusClass('2026-05-21', false);
    assertEqual(cls, 'status-ok', 'Confirmado a tiempo debería ser ok');
  });

  test('07. getStatusClass: confirmado tarde = late', function () {
    ViandasApp.saveConfirmation('2026-05-22', ViandasApp.buildConfirmation({ late: true, dishIndex: 3 }));
    var cls = ViandasApp.getStatusClass('2026-05-22', true);
    assertEqual(cls, 'status-late', 'Confirmado tarde debería ser late');
  });

  test('08. Simulación de deadline', function () {
    ViandasApp.setDeadlineSimulated(true);
    assertTrue(ViandasApp.isDeadlineSimulated(), 'Deadline debería estar simulado');
    ViandasApp.setDeadlineSimulated(false);
    assertTrue(!ViandasApp.isDeadlineSimulated(), 'Deadline debería estar desactivado');
  });

  test('09. Formato de fecha ISO', function () {
    var iso = ViandasApp.nowISO();
    assertTrue(/\d{4}-\d{2}-\d{2}/.test(iso), 'Formato ISO debería ser YYYY-MM-DD');
  });

  test('10. Datos separados por empleado', function () {
    // Simular Martín
    ViandasApp.setSimulatedUser('Martín Fernández');
    ViandasApp.saveUser({ name: 'Martín Fernández', attendance: [true, true, false, false, false] });
    ViandasApp.saveConfirmation('2026-05-12', ViandasApp.buildConfirmation({ late: false, dishIndex: 0 }));

    // Simular Sofía
    ViandasApp.setSimulatedUser('Sofía Martínez');
    ViandasApp.saveUser({ name: 'Sofía Martínez', attendance: [false, false, true, true, true] });

    // Verificar que Martín tiene sus datos
    var martin = ViandasApp.getUserByName('Martín Fernández');
    assertEqual(martin.attendance[0], true, 'Martín asiste lunes');

    // Verificar que Sofía no tiene los datos de Martín
    var sofiaConf = ViandasApp.getConfirmationsByName('Sofía Martínez');
    assertTrue(!sofiaConf['2026-05-12'], 'Sofía no debería tener confirmación de Martín');
  });

  /* --------------------------------------------------------
     Renderizar resultados
     -------------------------------------------------------- */

  var total = results.length;
  var html = '<h2>Resultados de Pruebas</h2>';
  html += '<p><strong>Total:</strong> ' + total + ' | <strong>PASS:</strong> ' + passCount + ' | <strong>FAIL:</strong> ' + failCount + '</p>';
  html += '<ul>';
  results.forEach(function (r) {
    var color = r.status === 'PASS' ? 'green' : 'red';
    html += '<li style="color:' + color + '"><strong>' + r.status + '</strong> — ' + r.name + (r.error ? ' <em>(' + r.error + ')</em>' : '') + '</li>';
  });
  html += '</ul>';

  var container = document.getElementById('test-results');
  if (container) {
    container.innerHTML = html;
  } else {
    document.body.innerHTML = html;
  }
})();
