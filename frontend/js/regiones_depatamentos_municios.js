const regiones = {
        andina: {
        'Antioquia': ['Medellín', 'Abejorral', 'Abriaquí', 'Alejandría', 'Amagá', 'Amalfi', 'Andes', 'Angelópolis', 'Angostura', 'Anorí', 'Santa Fe de Antioquia', 'Apartadó', 'Arboletes', 'Argelia', 'Armenia', 'Barbosa', 'Bello', 'Betania', 'Betulia', 'Briceño', 'Buriticá', 'Cáceres', 'Caicedo', 'Caldas', 'Campamento', 'Cañasgordas', 'Caracolí', 'Caramanta', 'Carepa', 'El Carmen de Viboral', 'Carolina', 'Caucasia', 'Chigorodó', 'Cisneros', 'Cocorná', 'Concepción', 'Concordia', 'Copacabana', 'Dabeiba', 'Donmatías', 'Ebéjico', 'El Bagre', 'Entrerríos', 'Envigado', 'Fredonia', 'Frontino', 'Giraldo', 'Girardota', 'Gómez Plata', 'Granada', 'Guadalupe', 'Guarne', 'Guatapé', 'Heliconia', 'Hispania', 'Itagüí', 'Ituango', 'Jardín', 'Jericó', 'La Ceja', 'La Estrella', 'La Pintada', 'La Unión', 'Liborina', 'Maceo', 'Marinilla', 'Montebello', 'Murindó', 'Mutatá', 'Nariño', 'Nechí', 'Necoclí', 'Olaya', 'Peñol', 'Peque', 'Pueblorrico', 'Puerto Berrío', 'Puerto Nare', 'Puerto Triunfo', 'Remedios', 'Retiro', 'Rionegro', 'Sabanalarga', 'Sabaneta', 'Salgar', 'San Andrés de Cuerquia', 'San Carlos', 'San Francisco', 'San Jerónimo', 'San José de la Montaña', 'San Juan de Urabá', 'San Luis', 'San Pedro', 'San Pedro de Urabá', 'San Rafael', 'San Roque', 'San Vicente', 'Santa Bárbara', 'Santa Rosa de Osos', 'Santo Domingo', 'El Santuario', 'Segovia', 'Sonsón', 'Sopetrán', 'Támesis', 'Tarazá', 'Tarso', 'Titiribí', 'Toledo', 'Turbo', 'Uramita', 'Urrao', 'Valdivia', 'Valparaíso', 'Vegachí', 'Venecia', 'Vigía del Fuerte', 'Yalí', 'Yarumal', 'Yolombó', 'Yondó', 'Zaragoza'],
        'Boyacá': ['Achí', 'Altos del Rosario', 'Arenal', 'Arjona', 'Arroyohondo', 'Barranco de Loba', 'Brazuelo de Papayal', 'Calamar', 'Cantagallo', 'Cartagena', 'Cicuco', 'Clemencia', 'Córdoba', 'El Carmen de Bolívar', 'El Guamo', 'El Peñón', 'Hatillo de Loba', 'Magangué', 'Mahates', 'Margarita', 'María la Baja', 'Montecristo', 'Mompox', 'Morales', 'Norosí', 'Pinillos', 'Regidor', 'Río Viejo', 'San Cristóbal', 'San Estanislao', 'San Fernando', 'San Jacinto', 'San Jacinto del Cauca', 'San Juan Nepomuceno', 'San Martín de Loba', 'Santa Catalina', 'Santa Rosa', 'Santa Rosa del Sur', 'Simití', 'Soplaviento', 'Talaigua Nuevo', 'Tiquisio', 'Turbaco', 'Turbana', 'Villanueva', 'Zambrano'],
        'caldas':['Aguadas', 'Anserma', 'Aranzazu', 'Belalcázar', 'Chinchiná', 'Filadelfia', 'La Dorada', 'La Merced', 'Manizales', 'Manzanares', 'Marmato', 'Marquetalia', 'Marulanda', 'Neira', 'Norcasia', 'Pácora', 'Palestina', 'Pensilvania', 'Riosucio', 'Risaralda', 'Salamina', 'Samana', 'San José', 'Supía', 'Victoria', 'Villamaría', 'Viterbo'],
        'cundinamarca':['Agua de Dios', 'Albán', 'Anapoima', 'Anolaima', 'Arbeláez', 'Beltrán', 'Bituima', 'Bogotá D.C.', 'Bojacá', 'Cabrera', 'Cachipay', 'Cajicá', 'Caparrapí', 'Cáqueza', 'Carmen de Carupa', 'Chaguaní', 'Chía', 'Chipaque', 'Choachí', 'Chocontá', 'Cogua', 'Cota', 'Cucunubá', 'El Colegio', 'El Peñón (Cundinamarca)', 'El Rosal (Cundinamarca)', 'Facatativá', 'Fomeque', 'Fosca', 'Funza', 'Fúquene (Fúquene)', 'Gachala (Gachalá)', 'Gachancipá (Gachancipá)', 'Gachetá (Gachetá)', 'Girardot (Girardot)', 'Granada (Granada)', 'Guachetá (Guachetá)', 'Guaduas (Guaduas)', 'Guasca (Guasca)', 'Guataquí (Guataquí)', 'Guatavita (Guatavita)', 'Guayabal de Siquima (Guayabal de Siquima)', 'Guayabetal (Guayabetal)', 'Gutiérrez (Gutiérrez)','Jerusalén (Jerusalén)','Junín (Junín)', 'La Calera (La Calera)', 'La Mesa (La Mesa)', 'La Palma (La Palma)', 'La Peña (La Peña)', 'La Vega (La Vega)', 'Lenguazaque (Lenguazaque)', 'Machetá (Machetá)', 'Madrid (Madrid)', 'Manta (Manta)', 'Medina (Medina)', 'Mosquera (Mosquera)', 'Nariño (Nariño)', 'Nemocón (Nemocón)', 'Nilo (Nilo)', 'Nimaima (Nimaima)', 'Nochteveo', 'Pacho', 'Paime', 'Pandi', 'Paratebueno', 'Pasca', 'Puerto Salgar', 'Pulí', 'Quebradanegra', 'Quetame', 'Quipile', 'Ricaurte', 'San Antonio del Tequendama', 'San Bernardo del Viento', 'San Cayetano', 'San Francisco', 'San Juan de Río Seco',],
        'Huila':['Acevedo', 'Agrado', 'Aipe', 'Algeciras', 'Altamira', 'Baraya', 'Campoalegre', 'Colombia', 'Elías', 'Garzón', 'Gigante', 'Guadalupe', 'Hobo', 'Iquira', 'Isnos', 'La Argentina', 'La Plata', 'Nátaga', 'Neiva', 'Oporapa', 'Paicol', 'Palermo', 'Palestina (Huila)', 'Pitalito (Pitalito)', 'Rivera (Rivera)', 'Saladoblanco (Saladoblanco)', 'San Agustín (San Agustín)', 'Santa María (Santa María)', 'Suaza (Suaza)', 'Tarqui (Tarqui)', 'Tesalia (Tesalia)', 'Timaná (Timaná)', 'Villavieja (Villavieja)', 'Yaguará'],
        'Norte de Santander':['Abrego', 'Arboledas', 'Bochalema', 'Bucarasica', 'Cáchira', 'Cucutilla', 'Durania', 'El Carmen (Norte de Santander)', 'El Tarra', 'El Zulia', 'Gramalote', 'Hacarí', 'Herrán', 'La Esperanza (La Esperanza)', 'La Playa (La Playa)', 'Los Patios (Los Patios)', 'Lourdes (Lourdes)', 'Ocaña (Ocaña)', 'Pamplona (Pamplona)', 'Pamplonita (Pamplonita)','Puerto Santander (Puerto Santander)', 'Ragonvalia (Ragonvalia)', 'Salazar de las Palmas (Salazar de las Palmas)', 'San Calixto (San Calixto)', 'Santiago (Santiago)', 'Sardinata (Sardinata)', 'Silos (Silos)','Teorama (Teorama)', 'Tibú (Tibú)', 'Toledo (Toledo)'],
        'Quindío':['Acandí', 'Alto Baudó', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bojayá', 'Carmen del Darién', 'Cértegui', 'Condoto', 'El Cantón del San Pablo', 'Istmina', 'Juradó', 'Litoral del San Juan', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuquí', 'Quibdó', 'Río Iro', 'Riosucio (Chocó)', 'San José del Palmar', 'Sipí', 'Tadó', 'Unguía'],
        'Risaralda':['Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Maní', 'Monterrey', 'Nunchía', 'Orocué', 'Paz de Ariporo', 'Pore', 'Recetor', 'Sabanalarga', 'San Luis de Palenque', 'Támara', 'Taquari', 'Trinidad', 'Villanueva'],
        'Santander':['Abrego', 'Arboledas', 'Bochalema', 'Bucarasica', 'Cáchira', 'Cucutilla', 'Durania', 'El Carmen (Norte de Santander)', 'El Tarra', 'El Zulia', 'Gramalote', 'Hacarí', 'Herrán', 'La Esperanza (La Esperanza)', 'La Playa (La Playa)', 'Los Patios (Los Patios)', 'Lourdes (Lourdes)', 'Ocaña (Ocaña)', 'Pamplona (Pamplona)', 'Pamplonita (Pamplonita)', 'Puerto Santander (Puerto Santander)', 'Ragonvalia (Ragonvalia)', 'Salazar de las Palmas (Salazar de las Palmas)', 'San Calixto (San Calixto)', 'Santiago (Santiago)', 'Sardinata (Sardinata)', 'Silos (Silos)', 'Teorama (Teorama)', 'Tibú (Tibú)', 'Toledo (Toledo)'],
        'Tolima':['Acandí', 'Alto Baudó', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bojayá', 'Carmen del Darién', 'Cértegui', 'Condoto', 'El Cantón del San Pablo', 'Istmina', 'Juradó', 'Litoral del San Juan', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuquí', 'Quibdó', 'Río Iro', 'Riosucio (Chocó)', 'San José del Palmar', 'Sipí', 'Tadó', 'Unguía'],
        'Bogotá D.C.':['Bogotá D.C.']
        },
        caribe: {
        'Atlántico': ['Barranquilla', 'Baranoa', 'Campo de la Cruz', 'Candelaria', 'Galapa', 'Juan de Acosta', 'Luruaco', 'Malambo', 'Manatí', 'Palmar de Varela', 'Piojó', 'Polonuevo', 'Ponedera', 'Puerto Colombia', 'Repelón', 'Sabanagrande', 'Sabanalarga', 'Santa Lucía', 'Santo Tomás', 'Soledad', 'Suan', 'Tubará', 'Usiacurí'],
        'Bolívar': ['Achí', 'Altos del Rosario', 'Arenal', 'Arjona', 'Arroyohondo', 'Barranco de Loba', 'Brazuelo de Papayal', 'Calamar', 'Cantagallo', 'Cartagena', 'Cicuco', 'Clemencia', 'Córdoba', 'El Carmen de Bolívar', 'El Guamo', 'El Peñón', 'Hatillo de Loba', 'Magangué', 'Mahates', 'Margarita', 'María la Baja', 'Montecristo', 'Mompox', 'Morales', 'Norosí', 'Pinillos', 'Regidor', 'Río Viejo', 'San Cristóbal', 'San Estanislao', 'San Fernando', 'San Jacinto', 'San Jacinto del Cauca', 'San Juan Nepomuceno', 'San Martín de Loba', 'Santa Catalina', 'Santa Rosa', 'Santa Rosa del Sur', 'Simití', 'Soplaviento', 'Talaigua Nuevo', 'Tiquisio', 'Turbaco', 'Turbana', 'Villanueva', 'Zambrano'],
        'Cesar':['Aguachica', 'Agustín Codazzi', 'Astrea', 'Becerril', 'Bosconia', 'Chimichagua', 'Chiriguaná', 'Curumaní', 'El Copey', 'El Paso', 'Gamarra', 'González', 'La Gloria', 'La Jagua de Ibirico', 'Manaure Balcón del Cesar', 'Pailitas', 'Pelaya', 'Pueblo Bello', 'Río de Oro', 'San Alberto', 'San Diego', 'San Martín', 'Tamalameque'],
        'Córdoba':['Ayapel', 'Buenavista', 'Canalete', 'Cereté', 'Chimá', 'Chinú', 'Ciénega de Oro', 'Cotorra', 'La Apartada', 'Lorica', 'Los Córdobas', 'Momil', 'Montelíbano', 'Moñitos', 'Planeta Rica', 'Puerto Escondido', 'Puerto Libertador', 'Purísima', 'Sahagún', 'San Andrés Sotavento', 'San Antero', 'San Bernardo del Viento', 'San Carlos (Córdoba)', 'San Pelayo (Córdoba)', 'Santa Cruz de Lorica (Santa Cruz)', 'Tierralta (Tierralta)', 'Valencia'],
        'La Guajira':['Inírida', 'Barranco Minas', 'Cacahual', 'Morichal', 'Pana Pana', 'San Felipe', 'San José del Guaviare'],
        'Magdalena':['Algarrobo', 'Aracataca', 'Ariguaní', 'Cerro San Antonio', 'Chivolo', 'Ciénaga', 'Concordia', 'El Banco', 'El Piñón', 'El Retén', 'Fundación', 'Guamal', 'Nueva Granada', 'Pedraza', 'Pijiño del Carmen', 'Plato', 'Puebloviejo', 'Remolino', 'Sabanas de San Ángel', 'Salamina (Magdalena)', 'San Sebastián de Buenavista (San Sebastián)', 'Santa Ana (Santa Ana)', 'Santa Bárbara de Pinto (Santa Bárbara)', 'Santa Marta (Santa Marta)', 'Sitionuevo (Sitionuevo)','Tenerife (Tenerife)', 'Zapayán'],
        'Sucre':['Acandí', 'Alto Baudó', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bojayá', 'Carmen del Darién', 'Cértegui', 'Condoto', 'El Cantón del San Pablo', 'Istmina', 'Juradó', 'Litoral del San Juan', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuquí', 'Quibdó', 'Río Iro', 'Riosucio (Chocó)', 'San José del Palmar', 'Sipí', 'Tadó', 'Unguía'],
        'San Andrés y Providencia':['Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Maní', 'Monterrey', 'Nunchía', 'Orocué', 'Paz de Ariporo', 'Pore', 'Recetor', 'Sabanalarga', 'San Luis de Palenque', 'Támara', 'Taquari', 'Trinidad', 'Villanueva']
        },
        pacifica: {
        'Chocó':[ 'Acandí', 'Alto Baudó', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bojayá', 'Carmen del Darién', 'Cértegui', 'Condoto', 'El Cantón del San Pablo', 'Istmina', 'Juradó', 'Litoral del San Juan', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuquí', 'Quibdó', 'Río Iro', 'Riosucio (Chocó)', 'San José del Palmar', 'Sipí', 'Tadó', 'Unguía'],
        'Cauca':['Almaguer', 'Argelia', 'Balboa', 'Bolívar', 'Buenos Aires', 'Cajibío', 'Caloto', 'Corinto', 'El Tambo', 'Florencia', 'Guapi', 'Inzá', 'Jambaló', 'La Sierra', 'La Vega', 'López de Micay', 'Mercaderes', 'Miranda', 'Morales', 'Padilla', 'Páez (Belalcázar)', 'Patía (El Bordo)', 'Piendamó', 'Popayán', 'Puerto Tejada', 'Puracé (Coconuco)', 'Rosas', 'San Sebastián (San Sebastián)', 'Santander de Quilichao (Santander)', 'Santa Rosa (Santa Rosa)', 'Suárez (Suárez)', 'Timbío (Timbío)', 'Timbiquí (Timbiquí)', 'Toribío (Toribío)', 'Villa Rica'],
        'Nariño':['Albania', 'Ancuyá', 'Arboleda', 'Barbacoas', 'Belén', 'Buesaco', 'Chachagüí', 'Colón (Nariño)', 'Consacá', 'Contadero', 'Córdoba (Nariño)', 'Cuaspud (Cuaspud)', 'Cumbal', 'Cumbitara', 'El Charco', 'El Peñol (Nariño)', 'El Rosario (Nariño)', 'El Tablón de Gómez (El Tablón)', 'El Tambo (Nariño)', 'Funes', 'Guachucal', 'Gualmatán', 'Iles (Iles)', 'Imués (Imués)', 'Ipiales (Ipiales)', 'La Cruz (La Cruz)', 'La Florida (La Florida)', 'La Llanada (La Llanada)', 'La Tola (La Tola)', 'Leiva (Leiva)', 'Linares (Linares)', 'Los Andes de Tumaco (Los Andes)', 'Magüí Payán (Magüí Payán)', 'Mallama (Mallama)', 'Mosquera (Mosquera)', 'Olaya Herrera (Olaya Herrera)', 'Ospina Pérez (Ospina Pérez)', 'Pasto (Pasto)', 'Policarpa (Policarpa)', 'Potosí (Potosí)', 'Providencia (Providencia)', 'Puerres (Puerres)'],
        'Valle del Cauca':['Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Maní', 'Monterrey', 'Nunchía', 'Orocué', 'Paz de Ariporo', 'Pore', 'Recetor', 'Sabanalarga', 'San Luis de Palenque', 'Támara', 'Taquari', 'Trinidad', 'Villanueva']
        },
        orinoquia: {
        'Arauca':['Arauca', 'Arauquita', 'Cravo Norte', 'Fortul', 'Puerto Rondón', 'Saravena', 'Tame'],
        'Casanare':['Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Maní', 'Monterrey', 'Nunchía', 'Orocué', 'Paz de Ariporo', 'Pore', 'Recetor', 'Sabanalarga', 'San Luis de Palenque', 'Támara', 'Taquari', 'Trinidad', 'Villanueva'],
        'Meta':['Acacías', 'Barranca de Upía', 'Cabuyaro', 'Castilla la Nueva', 'Cubarral', 'Cumaral', 'El Calvario', 'El Castillo', 'El Dorado', 'Fuente de Oro', 'Granada (Meta)', 'Guamal (Meta)', 'La Macarena', 'La Uribe', 'Lejanías', 'Mapiripán', 'Mesetas', 'Puerto Concordia', 'Puerto Gaitán', 'Puerto Lleras', 'Puerto López', 'Puerto Rico (Meta)', 'Restrepo (Meta)', 'San Carlos de Guaroa (San Carlos)', 'San Juan de Arama (San Juan)', 'San Martín (San Martín)', 'Vista Hermosa'],
        'Vichada':['Acandí', 'Alto Baudó', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bojayá', 'Carmen del Darién', 'Cértegui', 'Condoto', 'El Cantón del San Pablo', 'Istmina', 'Juradó', 'Litoral del San Juan', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuquí', 'Quibdó', 'Río Iro', 'Riosucio (Chocó)', 'San José del Palmar', 'Sipí', 'Tadó', 'Unguía']
        },
        amazonia: {
        'Amazonas':['El Encanto', 'La Chorrera', 'La Victoria', 'Leticia', 'Miriti - Parana', 'Puerto Alegria', 'Puerto Arica', 'Puerto Nariño', 'Puerto Santarder', 'Tarapaca'],
        'Caquetá':['Albania', 'Cartagena del Chairá', 'Curillo', 'El Doncello', 'El Paujil', 'Florencia', 'La Montañita', 'Milán', 'Morelia', 'Puerto Rico', 'San José del Fragua', 'San Vicente del Caguán', 'Solano', 'Solita', 'Valparaíso'],
        'Guainía':['Inírida', 'Barranco Minas', 'Cacahual', 'Morichal', 'Pana Pana', 'San Felipe', 'San José del Guaviare'],
        'Guaviare':['Calamar', 'El Retorno', 'Miraflores', 'San José del Guaviare'],
        'Putumayo':['Colón (Putumayo)', 'El Doncello', 'El Paujil', 'Florencia', 'La Montañita', 'Milán', 'Morelia', 'Puerto Asís', 'Puerto Guzmán', 'Puerto Leguízamo', 'Puerto Rico (Putumayo)', 'San Francisco (Putumayo)', 'San Miguel (Putumayo)', 'Santiago (Santiago)', 'Valparaíso (Valparaíso)'],
        'Vaupés':['Acandí', 'Alto Baudó', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bojayá', 'Carmen del Darién', 'Cértegui', 'Condoto', 'El Cantón del San Pablo', 'Istmina', 'Juradó', 'Litoral del San Juan', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuquí', 'Quibdó', 'Río Iro', 'Riosucio (Chocó)', 'San José del Palmar', 'Sipí', 'Tadó', 'Unguía']
        },
        insular: {
          'San Andrés': ['Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Maní', 'Monterrey', 'Nunchía', 'Orocué', 'Paz de Ariporo', 'Pore', 'Recetor', 'Sabanalarga', 'San Luis de Palenque', 'Támara', 'Taquari', 'Trinidad', 'Villanueva']
        }
      };

      // Selecciona los selects
      const selectRegion = document.getElementById('region-select');
      const selectDepartamento = document.getElementById('departamento-select');
      const selectMunicipio = document.getElementById('municipio-select');

      // Helper para limpiar y poblar selects
      function setOptions(select, options) {
        select.innerHTML = '<option value="">Seleccionar</option>';
        options.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.textContent = opt;
          select.appendChild(option);
        });
      }

      // Cuando cambia la región
      selectRegion.addEventListener('change', function() {
        const region = selectRegion.value;
        if (regiones[region]) {
          setOptions(selectDepartamento, Object.keys(regiones[region]));
          setOptions(selectMunicipio, []); // Limpia municipios
        } else {
          setOptions(selectDepartamento, []);
          setOptions(selectMunicipio, []);
        }
      });

      // Cuando cambia el departamento
      selectDepartamento.addEventListener('change', function() {
        const region = selectRegion.value;
        const departamento = selectDepartamento.value;
        if (regiones[region] && regiones[region][departamento]) {
          setOptions(selectMunicipio, regiones[region][departamento]);
        } else {
          setOptions(selectMunicipio, []);
        }
      });